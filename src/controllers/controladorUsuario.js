const helper = require('../helpers/usuariosJson')
let controlador ={
    usuario: (req, res) => {
       
        res.render('./vistaUsuario/usuario');
    }
}

module.exports = controlador;