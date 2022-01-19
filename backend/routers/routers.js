const express = require('express');
const router = express.Router();
const {allaccountholders,createAccount,singleAccountholder} = require('../controllers/accountHolder');
const {createtransaction,
    alltransactions,
    transactionByType,
    transactionById} = require('../controllers/transaction');


router.get("/allaccountholders",allaccountholders);
router.get("/singleaccountholder/:id",singleAccountholder);
router.post("/createaccount",createAccount);
router.post("/transaction",createtransaction);
router.get("/alltransactions",alltransactions);
router.get("/transactionsbytype/:type",transactionByType);
router.get("/transactionsbyid/:id",transactionById);



module.exports = router;