const express = require('express')

const app  = express()

app.use(express.json())

app.use('/', (req,res,next)=>{
    return res.status(200).json({"msg":"it's me from Shopping"})
})

app.listen(5003, ()=>{
    console.log("Shopping service is listing on 5003")
})