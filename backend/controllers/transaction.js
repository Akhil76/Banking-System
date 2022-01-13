const asynchandler = require('express-async-handler');
const transactionModel = require('../models/transaction');
const accountHolderModel = require('../models/accountHolder');



const deposit = asynchandler(async(req,res)=>{

    try{
        const {AccountHolderId,Deposit} = req.body;
        
        const AcHolder = await accountHolderModel.findById({_id:AccountHolderId});
        const PreviousBalance = AcHolder.MainBalance;
        const TotalBalance = PreviousBalance+Number(Deposit); // Number() is use to convert string into number
        console.log(TotalBalance);
        const deposit = await new transactionModel({
            AccountHolderId,
            Deposit,
            Balance:TotalBalance
        });
        const depositData = await deposit.save();
        const UpdateBalance = await accountHolderModel.findByIdAndUpdate(
            {_id:depositData.AccountHolderId},
            {MainBalance:depositData.Balance},
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
            message:"Deposited successfully.",
        });
    }catch(error){
        res.status(500).json({
            error:"Server side error occurred !"
        })
    }
});

module.exports = {deposit};