const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accountHolderSchema = new mongoose.Schema({
    AccountNo:{
        type:Number,
        default:0
    },
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    FullName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Mobile:{
        type:Number
    },
    Birthdate:{
        type:String,
        required:true
    },
    AccountType:{
        type:String,
        enum:["Saving","Current"],
        default:"Saving"
    },
    Picture:{
        type:String
    },
    Signature:{
        type:String
    },
    Nominee:{
        type:String
    },
    NomineePicture:{
        type:String
    },
    MainBalance:{
        type:Number,
        required:true
    },
    Date:{
        type:Date,
        default:new Date()
    },
    Transaction:[
       {
        type:Schema.Types.ObjectId,
        ref:'transaction'
    }
    
    ]
});


const accountHolder = mongoose.model("accountHolder",accountHolderSchema);

module.exports = accountHolder;