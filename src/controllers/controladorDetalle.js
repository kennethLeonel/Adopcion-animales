const helper = require('../helpers/manipulacionJson')

let controlador1 ={
    detalle: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));
        let mascotas = helper.leerJson();
        let id = req.params.id;
        let mascota = mascotas.find(mascota => mascota.id == id);
        // console.log(mascota);
        res.render('./vistaDetalle/detalleMascota', {mascota: mascota});
    }
}

module.exports = controlador1;