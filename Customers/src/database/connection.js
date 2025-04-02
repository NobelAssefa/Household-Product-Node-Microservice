const mongoose = require('mongoose')
const {DB_URL} = require('../config')

module.exports = async ()=>{
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            tls: true // Ensure TLS/SSL is enabled
          
        });
        console.log('Db Connected')
    } catch (error) {
        console.log('Error=======');
        console.log(error);
        process.exit(1);
        
    }
}