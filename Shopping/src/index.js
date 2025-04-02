const express = require('express')
const {dbConnection} = require('./database')
const expressApp = require('./express-app')

const {PORT} = require('./config')

const startServer =async ()=>{
    
 const app = express()
 await dbConnection()

 expressApp(app)

 app.listen(PORT, ()=>{
    console.log(`Shopping Service is listeing on Port ${PORT}`);
    
 }).on('error',(err)=>{
    console.log(err);
    process.exit();
    
})

}

startServer()