const express = require('express');
const router = express.Router();

// se  importa controlador
const controllerIndex = require('../controllers/contraladorIndex');

// Se obtiene la vista de home + gallery
router.get('/', controllerIndex.home);

module.exports = router;