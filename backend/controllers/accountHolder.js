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
            PrimaryAmount,
            Picture,
            Signature,
            Nominee,
            NomineePicture
        } = req.body;

        const newAccount = await new accountHolderModel({
            FirstName,
            LastName,
            FullName,
            Email,
            Address,
            Mobile,
            Birthdate,
            MainBalance:PrimaryAmount,
            Picture,
            Signature,
            Nominee,
            NomineePicture
        });
        const createdAccountData = await newAccount.save();
       
        const FirstTransaction = await new transactionModel({
            AccountHolderId:createdAccountData._id,
            Deposit:createdAccountData.MainBalance,
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
        })
    }
});

//--------------------------------------------------
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


module.exports = {allaccountholders,createAccount};