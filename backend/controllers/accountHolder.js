const asynchandler = require('express-async-handler');
const accountHolderModel = require('../models/accountHolder');

//----------Create Account--------------------------
const createAccount = asynchandler(async(req,res)=>{
    try{
        const {
            FirstName,
            LastName,
            FullName,
            Email,
            Address,
            Mobile,
            Birthdate,
            PrimaryAmount,
            Picture,
            Signature,
            Nominee,
            NomineePicture
        } = req.body;

        const newAccount = await new accountHolderModel({
            FirstName,
            LastName,
            FullName,
            Email,
            Address,
            Mobile,
            Birthdate,
            PrimaryAmount,
            Picture,
            Signature,
            Nominee,
            NomineePicture
        });
        const createdAccountData = await newAccount.save();
        res.status(200).json({
            result: createdAccountData,
            message:"Account is created successfully."
        });

    }catch(error){
        res.status(500).json({
            error:"Server side error occurred and account is not created!"
        })
    }
});
//--------------------------------------------------
const allaccountholders = asynchandler(async(req,res)=>{
    try{
        const data = await accountHolderModel.find();
        res.status(200).json(data);

    }catch(error){
        res.status(500).json({
            error:"Server side error occurred!"
        })
    }
});


module.exports = {allaccountholders,createAccount};