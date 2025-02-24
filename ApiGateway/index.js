const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')


const app  = express()

app.use(express.json())

app.use(cors())

app.use('/customer',proxy('http://localhost:5001'))
app.use('/shopping',proxy('http://localhost:5003'))
app.use('/',proxy('http://localhost:5002')) //products


app.listen(8000, ()=>{
    console.log("apiGateway is listening on port 8000")
})