import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import studentruter from './ruters/studentruter.js';
import productruter from './ruters/productruter.js';
import userruter from './ruters/userruter.js';
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:1234@cluster0.vqofbtl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(
    ( )=> {console.log("DB connected")
    }).catch(()=>{
        console.log("DB connection error")
    })



    app.use("/students", studentruter)
    app.use("/products", productruter)
    app.use("/users",userruter)


app.listen( 5000, 
    ()=>{
        console.log ('server is running on post 5000');
    }
      
    
)