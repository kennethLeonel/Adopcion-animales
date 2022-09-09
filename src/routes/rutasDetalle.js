const express = require('express');
const router = express.Router();

// se  importa controlador
const controllerDetalle = require('../controllers/controladorDetalle');

// Se obtiene la vista de home + gallery
router.get('/detalle/:id', controllerDetalle.detalle);

module.exports = router;