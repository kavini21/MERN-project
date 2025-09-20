import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import studentruter from './ruters/studentruter.js';
import productruter from './ruters/productruter.js';
import userruter from './ruters/userruter.js';
import jwt from "jsonwebtoken";


const app = express();

app.use(bodyParser.json())
// userwa hadunaa ganiima
app.use( // api sada gnna middleware ekak
    (req,res,next)=>{
        const tokenString = req.header("Authorization") //token ek kiyawaa ganiima
        if(tokenString != null){
            const token = tokenString.replace("Bearer ","")
             //console.log(token)

             jwt.verify(token,"wgk-gayanthi21$", 
                (err,decoded)=>{
                    if(decoded != null){
                        req.user = decoded
                        next()//token ekk dala niwardiwa ewala nm idiriyat ynn

                    }else{ //token ek invalid unaama
                        console.log("invalid token")
                        res.status(403).json({
                            message :"Invalid tocken"
                        })
                    }


                }
             )




        }else(
            next() //token ekk naththam ewala nm idiriyat ynn login unaama
        )
        
        //next()
    }
    )

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