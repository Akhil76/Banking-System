const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accountHolderSchema = new mongoose.Schema({
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
    PrimaryAmount:{
        type:Number,
        required:true
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
    }

});


const accountHolder = mongoose.model("accountHolder",accountHolderSchema);

module.exports = accountHolder;