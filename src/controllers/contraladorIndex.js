const helper = require('../helpers/manipulacionJson')
let controlador ={
    home: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));
        let mascotas = helper.leerJson();
        res.render('./vistaHome/index', {mascotas: mascotas});
    }
}

module.exports = controlador;