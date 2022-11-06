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
      let imagen = file.originalname ;
      cb(null, imagen)


  }
})

let upload = multer({ storage: storage,
  fileFilter: (req, file, cb) => {
    let acceptedExtensions = ['.jpg', '.png', '.gif' , '.jpeg'];
    let fileExtension = path.extname(file.originalname);
    if (acceptedExtensions.includes(fileExtension)) {
      cb(null, true)
    } else{
      cb(null, false)
    }

  },
 })



const router = express.Router();


router.get('/',  controladorRegistro.registro)
router.post('/', upload.single('imagen'), validaciones.validacionesRegistro, controladorRegistro.procesoRegistro);

module.exports = router;