const asynchandler = require('express-async-handler');
const accountHolderModel = require('../models/accountHolder');
const transactionModel = require('../models/transaction');

//----------Create Account--------------------------
const createAccount = asynchandler(async(req,res)=>{
    try{
        const {
            FirstName,
            LastName,
            FullName,
            Email,
            Address,
            Mobile,
            Birthdate,
            AccountType,
            PrimaryAmount,
            Nominee,
        } = req.body;

        const Picture = req.files.Picture[0].filename ; // multiple file upload using fields
        const Signature = req.files.Signature[0].filename;
        const NomineePicture = req.files.NomineePicture[0].filename;
        
        const AccountHolders = await accountHolderModel.find();
        const AccountNo = AccountHolders.length;

        const newAccount = await new accountHolderModel({
            AccountNo:AccountNo+1,
            FirstName,
            LastName,
            FullName,
            Email,
            Address,
            Mobile,
            Birthdate,
            AccountType,
            MainBalance:PrimaryAmount,
            Picture,
            Signature,
            Nominee,
            NomineePicture
        });
        
        const createdAccountData = await newAccount.save();
       
        const FirstTransaction = await new transactionModel({
            AccountHolderId:createdAccountData._id,
            AccountNo:createdAccountData.AccountNo,
            Name:createdAccountData.FullName,
            TransactionType:"Deposit",
            Deposit:createdAccountData.MainBalance,
            Balance:createdAccountData.MainBalance
        });

        const TransactionData = await FirstTransaction.save();
        const pushdata = await accountHolderModel.updateOne(
            {_id:TransactionData.AccountHolderId},
            {
                $push:{Transaction:TransactionData._id}
            }
            );
            
        res.status(200).json({
            result: createdAccountData,
            transaction:TransactionData,
            push:pushdata,
            message:"Account is created successfully."
        });
    }catch(error){
        res.status(500).json({
            error:"Server side error occurred and account is not created!"
        });
    }
});
//-----------------------------Deleting Account-----------------------------------------------------------
const deletingAccount = asynchandler(async(req,res)=>{
    try{
        const id = req.params.id;
        const accountDel = await accountHolderModel.findByIdAndDelete(id);
        const transactionDel = await transactionModel.deleteMany({AccountNo:accountDel.AccountNo});

        res.status(200).json({
            message:"Account is deleted successfully."
        });
    }catch(error){
        res.status(500).json({
            error:"Server side error occurred!"
        })
    }
});
//--------------------------------------------------------------------------------------------------
const allaccountholders = asynchandler(async(req,res)=>{
    try{
        const data = await accountHolderModel.find();
        res.status(200).json(data);

    }catch(error){
        res.status(500).json({
            error:"Server side error occurred!"
        })
    }
});

const singleAccountholder = asynchandler(async(req,res)=>{
    try{
        const Id = req.params.id;
        const data = await accountHolderModel.find({AccountNo:Id}).populate('Transaction');
        res.status(200).json(data);
        
    }catch(error){
        res.status(500).json({
            error:"Server side error occurred!"
        })
    }
});

module.exports = {createAccount,allaccountholders,deletingAccount,singleAccountholder};