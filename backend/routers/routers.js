const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {allaccountholders,
    createAccount,
    singleAccountholder,
    deletingAccount
} = require('../controllers/accountHolder');
const {createtransaction,
    alltransactions,
    transactionByType,
    transactionById} = require('../controllers/transaction');
const imageReader = require('../controllers/imgfileReader');
const {adminCreate,login} = require('../controllers/admin');
const auth = require('../middlewares/authenticated');






router.get("/allaccountholders",auth,allaccountholders);
router.get("/singleaccountholder/:id",auth,singleAccountholder);

router.post("/createaccount",auth,upload.fields([
    {name:"Picture",maxCount:1},
    {name:"Signature",maxCount:1},
    {name:"NomineePicture",maxCount:1}
]),createAccount);

router.delete("/deletingaccount/:id",auth,deletingAccount);

router.post("/transaction",auth,createtransaction);
router.get("/alltransactions",auth,alltransactions);
router.get("/transactionsbytype/:type",auth,transactionByType);
router.get("/transactionsbyid/:id",auth,transactionById);
router.get("/imagereader/:name",imageReader);

router.post("/admincreate",adminCreate);
router.post("/login",login);


module.exports = router;