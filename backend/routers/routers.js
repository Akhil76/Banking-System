const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {allaccountholders,createAccount,singleAccountholder} = require('../controllers/accountHolder');
const {createtransaction,
    alltransactions,
    transactionByType,
    transactionById} = require('../controllers/transaction');
const imageReader = require('../controllers/imgfileReader');

router.get("/allaccountholders",allaccountholders);
router.get("/singleaccountholder/:id",singleAccountholder);

router.post("/createaccount",upload.fields([
    {name:"Picture",maxCount:1},
    {name:"Signature",maxCount:1},
    {name:"NomineePicture",maxCount:1}
]),createAccount);

router.post("/transaction",createtransaction);
router.get("/alltransactions",alltransactions);
router.get("/transactionsbytype/:type",transactionByType);
router.get("/transactionsbyid/:id",transactionById);
router.get("/imagereader/:name",imageReader);



module.exports = router;