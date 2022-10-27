const {body}=require('express-validator');
const path=require("path")
module.exports={createMascotasValidation:[
body("nombre")
.notEmpty()
.withMessage("Falta el Nombre")
.isLength({min:1,max:10})
.withMessage("El nombre no puede tener mas de 10 letras"),
body("edad")//solucionar el tema de los numeros
.notEmpty()
.withMessage("Falta la edad")
.isLength({min:1,max:10})
.withMessage("La Mascota no tiene tanta edad salamin"),
body("sexo")
.notEmpty()
.withMessage("Debe elegir el sexo"),
body("raza")
.notEmpty()
.withMessage("Falta poner la raza"),
body("tipoMascota")
.notEmpty()
.withMessage("Falta elegir el tipo de mascota"),
body("descripcion")
.notEmpty()
.withMessage("Falta poner la descripcion"),
body("imagen")//solucionar la imagen
.notEmpty()
.withMessage("Falta el Nombre"),
body("estado")
.notEmpty()
.withMessage("Falta elegir el estado"),
body("vacunas")
.notEmpty()
.withMessage("Falta poner la cantidad de vacunas")
.isLength({min:1,max:10})
.withMessage("no tiene tantas vacunas"),
body("ciudad")
.notEmpty()
.withMessage("Falta elegir la ciudad"),
body("pais")
.notEmpty()
.withMessage("Falta elegir el pais"),
body("actitud")
.notEmpty()
.withMessage("Falta describir la actitud del perro")
]}