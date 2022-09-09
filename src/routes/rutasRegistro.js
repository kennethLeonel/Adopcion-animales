const express = require('express');


// se importa el controlador de registro
const controladorRegistro = require('../controllers/controladorRegistro');


 const router = express.Router();


router.get('/',  controladorRegistro.registro)


module.exports = router;