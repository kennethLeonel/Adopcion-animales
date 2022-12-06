const { body } = require('express-validator');
module.exports = {
    validacionesLogin: [ 
        body("email")
            .notEmpty()
            .withMessage("Campo nombre incompleto").bail().isEmail().withMessage("formato de email invalido"),
        body("password")
            .notEmpty()
            .withMessage("Campo password incompleto")
    ]
}