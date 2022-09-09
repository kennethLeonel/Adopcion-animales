const express = require('express');


// se importa el controlador de registro
const controladorAdmin = require('../../controllers/admin/controladorAdmin');


 const router = express.Router();


router.get('/',  controladorAdmin.vista)


module.exports = router;