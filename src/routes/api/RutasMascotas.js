const express = require('express');
const router = express.Router();

const apiMascotaController = require('../../controllers/api/MascotaController');



router.get('/', apiMascotaController.list);
router.get('/:id', apiUsuarioController.detail);
module.exports = router;
