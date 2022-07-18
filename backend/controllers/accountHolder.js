const asynchandler = require('express-async-handler');
const AccountHolderValidator = require('../validators/AccountHolderValidator');
const accountHolderModel = require('../models/accountHolder');
const transactionModel = require('../models/transaction');
const fs = require('fs');
const upload = require('../middlewares/upload');




//----------Create Account--------------------------
const createAccount = asynchandler(async (req, res) => {
    try {
       
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
        //--------------------------------file uploading item-----------------------------------------------------
        //var  {Signature,NomineePicture} = req.files; 
       // multiple file upload using fields
        // console.log(req.files)
        // const Picture = req.files.Picture[0].filename; 
        // const Signature = req.files.Signature[0].filename;
        // const NomineePicture = req.files.NomineePicture[0].filename;
       
        //const Signature = req.files.Signature;
        //const NomineePicture = req.files.NomineePicture;
        // if(req.files = {}){
        //     const Picture = "";
        //     const Signature = "";
        //     const NomineePicture = "";
        // }else{
        //     const Picture = req.files.Picture[0].filename;
        //     const Signature = req.files.Signature[0].filename;
        //     const NomineePicture = req.files.NomineePicture[0].filename;
        // }
       var Picture = "";
       var Signature = "";
       var NomineePicture = "";

        if(req.files.Picture){
            Picture = req.files.Picture[0].filename;
        }
        if(req.files.Signature){
            Signature = req.files.Signature[0].filename;
        }
        if(req.files.NomineePicture){
            NomineePicture = req.files.NomineePicture[0].filename;
        }
        console.log(Picture);
        
    
        
        //--------------------------------------------------------------------------------------------------------       
        const validate = AccountHolderValidator({
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
            Picture,
            Signature,
            NomineePicture
        });

        if (!validate.isValid) {
            res.status(400).json(validate.error);
        } else {
            const email = await accountHolderModel.findOne({Email});
            
            if (email){
                return res.status(400).json({
                    Email: 'Email alreay exists!'
                })
            }
            //-------------------------------------------------------------------------------------------------------
            const AccountHolders = await accountHolderModel.find();
            const AccountNo = AccountHolders.length;
    
            const newAccount = await new accountHolderModel({
                AccountNo: AccountNo + 1,
                FirstName,
                LastName,
                FullName,
                Email,
                Address,
                Mobile,
                Birthdate,
                AccountType,
                MainBalance: PrimaryAmount,
                Picture,
                Signature,
                Nominee,
                NomineePicture
            });
    
            const createdAccountData = await newAccount.save();
    
            const FirstTransaction = await new transactionModel({
                AccountHolderId: createdAccountData._id,
                AccountNo: createdAccountData.AccountNo,
                Name: createdAccountData.FullName,
                TransactionType: "Deposit",
                Deposit: createdAccountData.MainBalance,
                Balance: createdAccountData.MainBalance
            });
    
            const TransactionData = await FirstTransaction.save();
            const pushdata = await accountHolderModel.updateOne(
                { _id: TransactionData.AccountHolderId },
                {
                    $push: { Transaction: TransactionData._id }
                }
            );
    
            res.status(200).json({
                result: createdAccountData,
                transaction: TransactionData,
                push: pushdata,
                message: "Account is created successfully."
            });

            //-------------------------------------------------------------------------------------------------------
        }

    }catch(error) {
       console.log(error)
        res.status(200).json({
            message: "Server side error occurred and account is not created!"
        });
    }
});
//-----------------------------Deleting Account-----------------------------------------------------------
const deletingAccount = asynchandler(async (req, res) => {
    try {
        const id = req.params.id;
        const accountDel = await accountHolderModel.findByIdAndDelete(id);
        const transactionDel = await transactionModel.deleteMany({ AccountNo: accountDel.AccountNo });
        //------file deleting function----------------
        function delfile(filename) {
            const path = './uploadedFiles/';
            const fileNameWithPath = path + filename;
            if (filename) { //If there is no img file, fs.unlink will not work
                fs.unlink(fileNameWithPath, (err) => {
                    console.log(err);
                });
            }
        }
        //--------------------------------------------
        delfile(accountDel.Picture);
        delfile(accountDel.Signature);
        delfile(accountDel.NomineePicture);
        //---------------------------
        res.status(200).json({
            message: "Account is deleted successfully."
        });
    } catch (error) {
        res.status(500).json({
            error: "Server side error occurred!"
        })
    }
});
//--------------------------------------------------------------------------------------------------
const allaccountholders = asynchandler(async (req, res) => {
    try {
        const data = await accountHolderModel.find();
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            error: "Server side error occurred!"
        })
    }
});

const singleAccountholder = asynchandler(async (req, res) => {
    try {
        const Id = req.params.id;
        const data = await accountHolderModel.find({ AccountNo: Id }).populate('Transaction');
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            error: "Server side error occurred!"
        })
    }
});

module.exports = { createAccount, allaccountholders, deletingAccount, singleAccountholder };