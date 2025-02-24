const express = require('express');
const { log } = require('winston');

const app = express();


app.use(express.json())

app.use('/', (req,res,next)=>{
    return res.status(200).json({"msg": "It's me from Customers service"})
})
app.listen(5001, ()=>{
    console.log("app is listing in port 5001")
})