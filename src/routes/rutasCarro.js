const express = require('express');


// se importa el controlador de registro
const controladorCarro = require('../controllers/controladorCarro');


 const router = express.Router();


router.get('/',  controladorCarro.carrito)


module.exports = router;