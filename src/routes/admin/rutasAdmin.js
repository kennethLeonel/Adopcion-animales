const express = require('express');


// se importa el controlador de registro
const controladorAdmin = require('../../controllers/admin/controladorAdmin');


 const router = express.Router();


router.get('/',  controladorAdmin.vista)
router.get('/agregarMascota',  controladorAdmin.vistaAgregar)
router.get('/editarMascota/:id',  controladorAdmin.vistaEditar)

router.post('/agregarMascota',  controladorAdmin.agregar)
router.put('/editarMascota/:id',  controladorAdmin.editar)
router.delete('/eliminarMascota/:id',  controladorAdmin.eliminar)
module.exports = router;