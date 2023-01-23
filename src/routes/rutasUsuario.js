const express = require('express');
const router = express.Router();


// se importa el controlador de login
const controladorUsuario = require('../controllers/controladorUsuario');
const localMiddleware =require('../middleware/localMiddleware')

router.get('/',  controladorUsuario.usuario)
module.exports = router;
