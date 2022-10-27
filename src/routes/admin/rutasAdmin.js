const express = require('express');
const path = require('path');

var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = path.join(__dirname, '../../public/img/');
    cb(null, folder)
  },
  filename: function (req, file, cb) {
    // path.extname(file.originalname)
    let imagen = file.originalname ;
    cb(null, imagen) //Appending .jpg
  }
})

let upload = multer({ storage: storage })

// se importa el controlador de registro
const controladorAdmin = require('../../controllers/admin/controladorAdmin');
const { createMascotasValidation }=require('../../validations/mascotasValidation')

 const router = express.Router();


router.get('/',  controladorAdmin.vista)
router.get('/agregarMascota',  controladorAdmin.vistaAgregar)
router.get('/editarMascota/:id',  controladorAdmin.vistaEditar)

router.post('/agregarMascota', upload.single('img') ,createMascotasValidation,controladorAdmin.agregar)
router.put('/editarMascota/:id',  controladorAdmin.editar)
router.delete('/eliminarMascota/:id',  controladorAdmin.eliminar)
module.exports = router;