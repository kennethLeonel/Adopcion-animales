const express = require('express');
const router = express.Router();


// se importa el controlador de login
const controladorLogin = require('../controllers/controladorLogin');
const validaciones = require("../validations/validacionesLogin");
const localmiddle=require("../middleware/localsMiddle")


router.get('/', controladorLogin.login)
router.post('/', validaciones.validacionesLogin,  controladorLogin.procesoLogin)
router.get("/logout/", controladorLogin.logout);
module.exports = router;
