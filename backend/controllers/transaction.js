const asynchandler = require('express-async-handler');
const transactionModel = require('../models/transaction');
const accountHolderModel = require('../models/accountHolder');



const createtransaction = asynchandler(async(req,res)=>{

    try{
        const AccountHolderId = req.body.id;
        const {AccountNo,Name,TransactionType,Deposit,Withdraw,Transfer,TransferingAccountNo} = req.body;
        
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
            AccountNo,
            Name,
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
            message:"Transaction is successful.",
            transactionData
        });
    }catch(error){
        res.status(500).json({
            error:"Server side error occurred!"
        })
    }
});


const alltransactions = asynchandler(async(req,res)=>{
    try{
        const data = await transactionModel.find().sort({_id:-1});
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({
            error:"Server side error occurred!"
        })
    }
})


const transactionByType = asynchandler(async(req,res)=>{
    try{
        const Type = req.params.type;
        const data = await transactionModel.find({TransactionType:Type}).sort({_id:-1});
        res.status(200).json(data);
               
    }catch(err){
        res.status(500).json({
            error:"Server side error occurred!"
        })
    }
});

const transactionById = asynchandler(async(req,res)=>{
    try{
        const Id = req.params.id;
        const data = await transactionModel.findById({AccountHolderId:Id}).sort({_id:-1});
        res.status(200).json(data);
    }catch(err){
        res.status(200).json({
            error:"Server side error occurred!"
        });
    }
})

module.exports = {createtransaction,alltransactions,transactionByType,transactionById};