const express = require('express');


// se importa el controlador de login
const controladorLogin = require('../controllers/controladorLogin');


 const router = express.Router();


router.get('/',  controladorLogin.login)


module.exports = router;