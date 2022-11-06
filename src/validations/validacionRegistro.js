const helper = require("../helpers/usuariosJson")
const { body } = require('express-validator');
const path = require('path');
module.exports = {
    validacionesRegistro: [
        body("nombre")
            .notEmpty()
            .withMessage("Campo nombre incompleto"),
        body("email")
            .notEmpty()
            .withMessage("Campo email incompleto")
            .bail()
            .isEmail()
            .withMessage("formato de email invalido")
            .custom(function (value, { req }) {
                const usuarios = helper.leerJson()
                const usuarioEncontrado = usuarios.find(usuario => usuario.email == value)
                if (usuarioEncontrado) {
                    throw new Error('Email ya registrado')
                } else {
                    return true
                }
            }),
        body("password")
            .notEmpty()
            .withMessage("Campo password incompleto"),
        body("imagen")
            .custom((value, { req }) => {
                let file = req.file;
                let acceptedExtensions = ['.jpg', '.png', '.gif' , '.jpeg'];

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