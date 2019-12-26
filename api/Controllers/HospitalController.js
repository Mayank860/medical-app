const mongoose = require('mongoose');
const hospitalModel = require('../Models/HospitalModel');



const createHospital = async (req,res) =>{
    let hospitalDetails = req.body;
    console.log(req.body,'hospital')
    const hospital = new hospitalModel(hospitalDetails);
    try {
        let hospitalData = await hospital.save();
        console.log('hospital created !!!',hospitalData);
        res.send('hospital created')
    } catch (error) {
        console.log('hospital not created');
        res.send('hospital not created',error);
    }

}

const getHospitalList = async (req,res) =>{
    try {
        let hospitalList = await hospitalModel.find({});
        console.log('hospital list!!!',hospitalList);
        res.json(hospitalList)
    } catch (error) {
        console.log('hospital not have list');
        res.send('hospital not have list',error);
    }

}





module.exports = {
    createHospital:createHospital,
    getHospitalList:getHospitalList
}

