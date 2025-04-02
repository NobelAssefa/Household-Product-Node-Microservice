const mongoose = require('mongoose')
const {DB_URL} = require('../config')

module.exports = async ()=>{
    
    try {
        await mongoose.connect(DB_URL, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Db Connected')
    } catch (error) {
        console.log('Error=======');
        console.log(error);
        process.exit(1);
        
    }
}