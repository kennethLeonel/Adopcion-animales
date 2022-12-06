const express = require('express');
const router = express.Router();

// se  importa controlador
const controllerDetalle = require('../controllers/controladorDetalle');

// Se obtiene la vista de detalle de la mascota
router.get('/:id', controllerDetalle.detalle);

module.exports = router;