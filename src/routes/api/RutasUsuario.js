const express = require('express');
const router = express.Router();

const apiUsuarioController = require('../../controllers/api/ControladorUsuario');


router.get('/', apiUsuarioController.list);


module.exports = router;