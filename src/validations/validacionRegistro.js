const helper=require("../helpers/usuariosJson")
const { body } = require('express-validator');
module.exports = {
    validacionesRegistro: [ 
    body("nombre")
        .notEmpty()
        .withMessage("Campo nombre incompleto"),
    body("email")
        .notEmpty()
        .withMessage("Campo email incompleto")
        .isEmail()
        .withMessage("formato de email invalido")
        .custom(function(value, {req}){
            const usuarios = helper.leerJson()
            const usuarioEncontrado = usuarios.find(function(usuario){
                return usuario.email == value;
            })
            if(usuarioEncontrado){
                return false
            }else{
                return true
            }
        }).withMessage("Email ya registrado"),
    body("password")
        .notEmpty()
        .withMessage("Campo password incompleto"),
        body("img")
            .notEmpty()
            .withMessage("Tienes que subir una imagen").custom((value, { req }) => {
                let file = req.file;
                let acceptedExtensions = ['.jpg', '.png', '.gif'];
        
                if (!file) {
                    throw new Error('Tienes que subir una imagen');
                } else {
                    let fileExtension = path.extname(file.originalname);
                    if (!acceptedExtensions.includes(fileExtension)) {
                        throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                    }
                }
        
                return true;
            })
    ]
}