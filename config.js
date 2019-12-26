const dotenv = require('dotenv');
if(process.env.NODE_ENV == 'development')
{
    dotenv.config({path: __dirname + '/.env'});
}

module.exports = {
    mongoUri:process.env.mongoUri,
    port:process.env.PORT
}