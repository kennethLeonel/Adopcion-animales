const { body } = require('express-validator');
module.exports = {
    validacionesMascota: [ 
        body("nombre")
            .notEmpty()
            .withMessage("el nombre esta incompleto"),
        body("edad")
            .notEmpty()
            .withMessage("Campo edad incompleto"),
            body("raza")
            .notEmpty()
            .withMessage("Campo password incompleto")
            ,   body("img")
            .notEmpty()
            .withMessage("Campo password incompleto")
            ,   body("estado")
            .notEmpty()
            .withMessage("Campo password incompleto")
            ,   body("pais")
            .notEmpty()
            .withMessage("Campo password incompleto")
            ,   body("ciudad")
            .notEmpty()
            .withMessage("Campo password incompleto")
            ,  body("tipoMascota")
            .notEmpty()
            .withMessage("Campo password incompleto")
            ,   body("sexo")
            .notEmpty()
            .withMessage("Campo password incompleto")
            ,   body("password")
            .notEmpty()
            .withMessage("Campo password incompleto")
            ,
    ]
}