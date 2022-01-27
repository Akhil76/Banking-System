const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const routers = require('./routers/routers');

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({limit: '50mb', extended:true}));
app.use(express.urlencoded({limit: '50mb', extended:true}));
app.use(passport.initialize())


app.use('/',routers);

PORT = process.env.PORT;

Db_url = `mongodb+srv://${process.env.User}:${process.env.Password}@bank.klnpa.mongodb.net/${process.env.DbName}?retryWrites=true&w=majority`;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
    mongoose.connect(Db_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        //useFindAndModify: false // for this ,database is not connected.
    })
    .then(()=>{
        console.log('Database is connected..');
    })
    .catch(()=>{
        console.log('Database is not connected!'); 
    })

});

