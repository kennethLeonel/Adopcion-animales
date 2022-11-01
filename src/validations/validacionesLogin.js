const { body } = require('express-validator');
module.exports = {
    validacionesLogin: [ 
        body("email")
            .notEmpty()
            .withMessage("Campo nombre incompleto"),
        body("password")
            .notEmpty()
            .withMessage("Campo password incompleto")
    ]
}