const express = require('express')

const app  = express()

app.use(express.json())

app.use('/', (req,res,next)=>{
    return res.status(200).json({"msg":"it's me from products"})
})

app.listen(5002, ()=>{
    console.log("Products service is listing on 5002")
})