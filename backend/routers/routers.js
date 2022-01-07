const express = require('express');
const router = express.Router();
const {allaccountholders,createAccount} = require('../controllers/accountHolder');
const {deposit} = require('../controllers/transaction');


router.get("/allaccountholders",allaccountholders);
router.post("/createaccount",createAccount);
router.post("/deposit",deposit);










module.exports = router;