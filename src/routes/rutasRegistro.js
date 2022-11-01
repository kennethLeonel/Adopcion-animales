const express = require('express');
const path = require('path');

var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = path.join(__dirname, '../../public/img/');
    cb(null, folder)
  },
  filename: function (req, file, cb) {
    let imagen = file.originalname ;
    cb(null, imagen) 
  }
})

let upload = multer({ storage: storage })

// se importa el controlador de registro
const controladorRegistro = require('../controllers/controladorRegistro');


const router = express.Router();


router.get('/',  controladorRegistro.registro)
router.post('/', upload.single('img'), controladorRegistro.procesoRegistro);

module.exports = router;