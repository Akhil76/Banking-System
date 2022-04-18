const validator = require('validator');



const validate = accountHolder =>{
    let error = {};

    if(!accountHolder.FirstName){
        error.FirstName = 'First Name field is empty!'
    }
    if(!accountHolder.LastName){
        error.LastName = 'Last Name field is empty!'
    }
    if(!accountHolder.FullName){
        error.accountHolder = 'Full Name field is empty!'
    }
    if(!accountHolder.Email){
        error.Email = 'Please,enter your email.'
    }else if(!validator.isEmail(accountHolder.Email)){
        error.Email = 'Please,enter a valid email.'
    }
    if(!accountHolder.Address){
        error.Address = 'Address field is empty!' 
    }
    if(!accountHolder.Mobile){
        error.Mobile = 'Mobile No field is empty!'
    }
    if(!accountHolder.Birthdate){
        error.Birthdate = 'Date of birth field is empty!'
    }
    if(!accountHolder.AccountType){
        error.AccountType = 'Account type field is empty!'
    }
    if(!accountHolder.PrimaryAmount){
        error.PrimaryAmount = 'Primary amount field is empty!'
    }
    if(!accountHolder.Picture){
        error.Picture = 'Account holder picture field is empty!'
    }
    if(!accountHolder.Signature){
        error.Signature = 'Signature verification image field is empty!'
    }
    if(!accountHolder.Nominee){
        error.Nominee = 'Nominee name field is empty!'
    }
    if(!accountHolder.NomineePicture){
        error.NomineePicture = 'Nominee Picture field is empty!'
    }
    return{
        error,
        isValid:Object.keys(error).length==0
    }
    
};


module.exports = validate;