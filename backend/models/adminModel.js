const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Image:{
        type:String
    }
})


const adminModel = mongoose.model('adminModel',adminSchema);
module.exports = adminModel;