

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // note: have to create .env file after install dotenv
// const dotenv = require('dotenv');
////import routers////
import lotteryRoute from './routes/lottery.js';
import userBoute from './routes/user.js';
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoos = require('mongoose');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
// app.use(bodyParser.json({ limit: '30mb', extended: true }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));


app.use('/lottery',lotteryRoute);
app.use('/user',userBoute);
app.get('/',(req,res)=>{
    res.send('Hello Here Is Heroku API');
})
const port = process.env.PORT || 5000;
const url = process.env.CONNECTION_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port,()=> console.log(`Server running on port:${port}`)))
    .catch((error) => console.log(error.message));
// mongoose.set('useFindAndModity',false);