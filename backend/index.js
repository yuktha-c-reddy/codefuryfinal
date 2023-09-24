const ConnectToMongo = require('./db');
const express = require('express');
var cors = require('cors');
const { default: mongoose, Collection } = require('mongoose');
const collection = require('./models/collection');

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json())

ConnectToMongo().then(() => {
    console.log('MongoDB connected successfully');

    app.get('/' ,cors(),(req,res)=>{
        
    })
    app.post('/',async(req,res)=>{
        const{email,password}=req.body
        try {
            const check=await collection.findOne({email:email})
            if(check){
                if(check.password===password){
                    res.json("login success")
                }else{
                    res.json("wrong password")
                }
            }
            else{
                res.json("notexist")
            }
        } catch (error) {
            res.json("notexist")
        }
    })
    app.post('/signup',async(req,res)=>{
        const{email,password}=req.body

        const data={
            email:email,
            password:password
        }
        try {
            const check=await collection.findOne({email:email})
            console.log(check)
            if(check){
                res.json("exist")
            }
            else{
                console.log("here")
                res.json("notexist")
                await collection.insertMany([data])
            }
        } catch (error) {
            res.json("no")
        }
    })
    app.listen(port, () => {
        console.log(`iNotebook backend listening on http://localhost:${port}`);
    });
}).catch((error) => {       //error if problem on hosting
    console.error('Error during startup:', error.message);
});


module.exports = ConnectToMongo;