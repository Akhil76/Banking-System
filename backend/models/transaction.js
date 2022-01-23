const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const transactionSchema = new mongoose.Schema({
    AccountHolderId:{
        type:Schema.Types.ObjectId,
        ref:"accountHolder",
        required:true
    },
    Name:{
        type:String
    },
    AccountNo:{
        type:Number
    },
    TransactionType:{
        type:String,
        enum:["Deposit","Withdraw","Transfer"]
    },
    Deposit:{
        type:Number
    },
    Withdraw:{
        type:Number
    },
    Transfer:{
        type:Number
    },
    TransferingAccountNo:{
        type:Number
    },
    Interest:{
        type:Number
    },
    Charge:{
        type:Number
    },
    Balance:{
        type:Number
    },
    Date:{
        type:Date,
        default:new Date()
    }
    
});


const transaction = mongoose.model("transaction",transactionSchema);
module.exports = transaction;