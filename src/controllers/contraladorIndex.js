const helper = require('../helpers/manipulacionJson')
const db = require('../database/models');
let controlador ={
    home: (req, res) => {
        // Vamos a buscar los datos de la mascotas en la base de datos
        db.Pets.findAll({}).then(pets => {
            
            res.render('./vistaHome/index', {mascotas: pets});  

        }).catch(error => {
            console.log(error);
        })
        // db.Countries.create({
        //     name: 'Argentina' // aca cojemos mejor los datos del req.body
        // }).catch(err => {
        //     console.log("Lo lamentamos ya existe ",err.message);
        // })
        //Forma antigua de hacerlo
        //let mascotas = helper.leerJson();
        //res.render('./vistaHome/index', {mascotas: mascotas});
    }
}

module.exports = controlador;