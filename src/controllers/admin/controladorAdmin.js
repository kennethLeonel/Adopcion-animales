const helper = require('../../helpers/manipulacionJson')
const db = require('../../database/models');
const {validationResult}=require("express-validator")
let controlador ={
    vista: (req, res) => { db.Pets.findAll({}).then(pets => {
            
        res.render('./vistaCRUDAdmin/crudAdmin.ejs', {mascotas: pets});  

    }).catch(error => {
        console.log(error);
    })
        // res.sendFile(path.join(__dirname, './views/index.html'));
        //forma antigua de hacerlo
        // let mascotas = helper.leerJson();
        // res.render('./vistaCRUDAdmin/crudAdmin',{mascotas: mascotas});
    },
    vistaAgregar: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));
        res.render('./vistaCRUDAdmin/FormAdmin');
    },
    vistaEditar: (req, res) => {
        let mascotas = helper.leerJson();
        let id = req.params.id;
        let mascota = mascotas.find(mascota => mascota.id == id);
        // res.sendFile(path.join(__dirname, './views/index.html'));
        res.render('./vistaCRUDAdmin/EditAdmin',{mascota: mascota});
    },
    agregar:(req, res) => {
        const error = validationResult(req)
        if(!error.isEmpty()){    
            return res.render("./vistaCRUDAdmin/FormAdmin.ejs", { errors: error.mapped(), old: req.body })
         }
        let mascotas = helper.leerJson();
        console.log(req.file, req.body)

        let mascota = {
            id: mascotas.length + 1,
            nombre: req.body.nombre,
            edad: req.body.edad,
            sexo: req.body.sexo,
            raza: req.body.raza,
            tipoMascota: req.body.tipoMascota,
            adoptado: req.body.estado,
            cantidadVacunas: req.body.vacunas,
            ciudad: req.body.ciudad,
            pais: req.body.pais,
            descripcion: req.body.descripcion,
            img:"/img/" + req.file?.originalname,
            imagen: req.file,
            actitud: req.body.actitud,
        }

        mascotas.push(mascota);
        helper.escribirJson(mascotas);
        res.redirect('/admin');
    },
    editar: (req, res) => {
        let mascotas = helper.leerJson();
        let id = req.params.id;
        let mascota = mascotas.find(mascota => mascota.id == id);
        console.log(mascota);
        mascota.nombre = req.body.nombre;
        mascota.edad = req.body.edad;
        mascota.sexo = req.body.sexo;
        mascota.raza = req.body.raza;
        mascota.tipoMascota = req.body.tipoMascota;
        mascota.adoptado = req.body.estado;
        mascota.cantidadVacunas = req.body.vacunas;
        mascota.ciudad = req.body.ciudad;
        mascota.pais = req.body.pais;
        mascota.descripcion = req.body.descripcion;
        mascota.img = req.body.img;
        mascota.actitud = req.body.actitud;
        helper.escribirJson(mascotas);
        res.redirect('/admin');
    },
    eliminar: (req, res) => {
        let mascotas = helper.leerJson();
        let id = req.params.id;
        console.log(id);
        mascotas = mascotas.filter(mascota => mascota.id != id);
        helper.escribirJson(mascotas);
        res.redirect('/admin');

    }
}


module.exports = controlador;



