const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json({ type: 'application/json' }))

const {mongoUri,port} = require('./config.js');
const Auth = require('./api/Middlewares/AuthMiddleware');
const Cors = require('./api/Middlewares/CorsMiddleware')
const {createUsers} = require('./api/Controllers/UserController')
const {createHospital,getHospitalList} = require('./api/Controllers/HospitalController')
require('./Connection.js').connect(mongoUri);




app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));
app.post('/login',[Cors.cors,Auth.auth],(req,res) => res.send('done'));
app.post('/createUsers',[Cors.cors,Auth.auth],createUsers);
app.post('/createHospital',[Cors.cors,Auth.auth],createHospital);
app.get('/getHospitalList',[Cors.cors,Auth.auth],getHospitalList);
// app.post('/createDepartment',[Cors.cors,Auth.auth],createDepartment);
// app.post('/createDoctor',[Cors.cors,Auth.auth],createDoctor);









app.listen(4000,function(){
    console.log('Port connected '+`${port}`);
})