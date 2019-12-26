const mongoose = require('mongoose');
async function connect(mongoUri){
    try {
        await mongoose.connect(mongoUri, { useNewUrlParser: true,useUnifiedTopology: true });
        console.log('Database Connected successfully');
      } catch (error) {
        setTimeout(()=>{connect()},5000)
        //handleError(error);
      }
} 

exports.connect = connect;

