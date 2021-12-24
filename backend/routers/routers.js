const express = require('express');
const router = express.Router();
const {allaccountholders,createAccount} = require('../controllers/accountHolder');


router.get("/allaccountholders",allaccountholders);
router.post("/createaccount",createAccount);










module.exports = router;