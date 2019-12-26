const mongoose = require('mongoose');
const userModel = require('../Models/UserModel');



const createUsers = async (req,res) =>{
    let userData = req.body;
    console.log(req.body,'userData')
    const user = new userModel(userData);
    try {
        let userdata = await user.save();
        console.log('user created !!!');
        res.send('user created')
    } catch (error) {
        console.log('user not created');
        res.send('user not created',error);
    }

}





module.exports = {
    createUsers:createUsers
}

