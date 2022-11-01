const express = require('express');
const router = express.Router();


// se importa el controlador de login
const controladorLogin = require('../controllers/controladorLogin');




router.get('/',  controladorLogin.login)
router.post('/',  controladorLogin.procesoLogin)

module.exports = router;
