const express = require('express');


// se importa el controlador de registro
const controladorFormAdmin = require('../../controllers/admin/controladorFormAdmin');


 const router = express.Router();


router.get('/',  controladorFormAdmin.vista)


module.exports = router;