

const cors = (req,res,next) =>{
    console.log('you are in correct routes');
    next();
}

exports.cors = cors;