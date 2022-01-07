const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const transactionSchema = new mongoose.Schema({
    AccountHolderId:{
        type:Schema.Types.ObjectId,
        ref:"accountHolder",
        required:true
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
    Interest:{
        type:Number
    },
    Charge:{
        type:Number
    }
    
});


const transaction = mongoose.model("transaction",transactionSchema);
module.exports = transaction;