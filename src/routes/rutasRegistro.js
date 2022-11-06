const express = require('express');
const path = require('path');

var multer = require('multer');
// se importa el controlador de registro
const controladorRegistro = require('../controllers/controladorRegistro');
const validaciones = require("../validations/validacionRegistro");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = path.join(__dirname, '../public/img/users/');
    cb(null, folder)

  },
  filename: function (req, file, cb) {
    // path.extname(file.originalname)
    let imagen = file.originalname ;
  
    cb(null, imagen) //Appending .jpg
  }
})

let upload = multer({ storage: storage })



const router = express.Router();


router.get('/',  controladorRegistro.registro)
router.post('/', upload.single('imagen'), validaciones.validacionesRegistro, controladorRegistro.procesoRegistro);

module.exports = router;