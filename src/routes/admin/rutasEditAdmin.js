const express = require('express');


// se importa el controlador de registro
const controladorEditAdmin = require('../../controllers/admin/controladorEditAdmin');


 const router = express.Router();


router.get('/', controladorEditAdmin.vista)


module.exports = router;