

const auth = (req,res,next) =>{
    console.log('you are authenticated');
    next();
}

exports.auth = auth;