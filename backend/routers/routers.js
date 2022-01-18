const express = require('express');
const router = express.Router();
const {allaccountholders,createAccount,singleAccountholder} = require('../controllers/accountHolder');
const {transaction} = require('../controllers/transaction');


router.get("/allaccountholders",allaccountholders);
router.get("/singleaccountholder/:id",singleAccountholder);
router.post("/createaccount",createAccount);
router.post("/transaction",transaction);



module.exports = router;