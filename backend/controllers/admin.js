const asynchandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminModel = require('../models/adminModel');

//-------------admin set ------------------------------------
const adminCreate = asynchandler(async(req,res)=>{
    try{
        const {Username,Password} = req.body;
        const hashedpassword = await bcrypt.hash(Password,10);
        const setadmin = new adminModel({
            Username:Username,
            Password:hashedpassword
        });
        const result = await setadmin.save();
        res.status(200).json({
            message:"Successfully admin set.",
            result
        });
    }catch(error){
        res.status(401).json({
            error: "Server error occurred!"
        });
    }
})
//-----------------------------------------------------------

//--------------admin login----------------------------------
const login = asynchandler(async(req,res)=>{

    try{
          const {Username,Password} = req.body;
  
          const admin = await adminModel.find({Username:Username});
  
          if(admin && admin.length>0){
              const isValidPassword = await bcrypt.compare(Password,admin[0].Password);
  
              if(isValidPassword){
  
              const token = jwt.sign({
                  Id: admin[0]._id,
                  Username : admin[0].Username
              },process.env.JWT_SECRET,{
                  expiresIn: "720h"
              });
  
              res.status(200).json({
                  token: `Bearer ${token}`,
                  message: "Logged in successfully."
              });
              }else{ 
              res.status(401).json({
                  "error": "Username or password does not match!"
              });
          }
          }else{
              res.status(401).json({
                  "error": "Username or password does not match!"
              });
          }
  
    }catch{
      res.status(401).json({
          "error": "Server error occurred!"
      });
    }
  })
  
  







module.exports = {adminCreate,login};