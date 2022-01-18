const asynchandler = require('express-async-handler');
const transactionModel = require('../models/transaction');
const accountHolderModel = require('../models/accountHolder');



const transaction = asynchandler(async(req,res)=>{

    try{
        const AccountHolderId = req.body.id;
        const {TransactionType,Deposit,Withdraw,Transfer,TransferingAccountNo} = req.body;
        
        const AcHolder = await accountHolderModel.findById({_id:AccountHolderId});
        var PreviousBalance = AcHolder.MainBalance;
        var TotalBalance="";
        if(TransactionType=="Deposit"){
            TotalBalance = PreviousBalance+Number(Deposit); // Number() is use to convert string into number
        }else if(TransactionType=="Withdraw"){
            TotalBalance = PreviousBalance-Number(Withdraw);
        }else if(TransactionType=="Transfer"){
            TotalBalance = PreviousBalance-Number(Transfer);
        }
       
        const transaction = await new transactionModel({
            AccountHolderId,
            TransactionType,
            Deposit,
            Withdraw,
            Transfer,
            TransferingAccountNo,
            Balance:TotalBalance
        });

        const transactionData = await transaction.save();
        const UpdateBalance = await accountHolderModel.findByIdAndUpdate(
            {_id:transactionData.AccountHolderId},
            {MainBalance:transactionData.Balance},
            {new:true}
        );
        const pushObjId = await accountHolderModel.findOneAndUpdate(
            {_id:transactionData.AccountHolderId},
            {
                $push:{Transaction:transactionData._id}
            }
        );
        res.status(200).json({
            result:transactionData,
            message:"transaction is successful."
        });
    }catch(error){
        res.status(500).json({
            error:"Server side error occurred !"
        })
    }
});

module.exports = {transaction};