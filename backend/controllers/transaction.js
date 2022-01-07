const asynchandler = require('express-async-handler');
const transactionModel = require('../models/transaction');
const accountHolderModel = require('../models/accountHolder');



const deposit = asynchandler(async(req,res)=>{
    try{
        const {AccountHolderId,Deposit} = req.body;
        //const Balance = transactionModel.Balance+Deposit;
        const deposit = await new transactionModel({
            AccountHolderId,
            Deposit
        });
        const depositData = await deposit.save();
        const AcHolder = await accountHolderModel.findById({_id:AccountHolderId});
        const TotalBalance = AcHolder.MainBalance+depositData.Deposit;
        
        const UpdateBalance = await accountHolderModel.findByIdAndUpdate(
            {_id:depositData.AccountHolderId},
            {MainBalance:TotalBalance},
            {new:true}
        );
        const pushObjId = await accountHolderModel.findOneAndUpdate(
            {_id:depositData.AccountHolderId},
            {
                $push:{Transaction:depositData._id}
            }
        );
        res.status(200).json({
            result:depositData,
            message:"Deposited successfully."
        });
    }catch(error){
        res.status(500).json({
            error:"Server side error occurred !"
        })
    }
})

module.exports = {deposit};