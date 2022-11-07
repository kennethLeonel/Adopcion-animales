const helper = require('../helpers/usuariosJson')
let controlador ={
    usuario: (req, res) => {
        let usarioActual = req.session.usuarioLogueado;
        console.log(usarioActual);
        res.render('./vistaUsuario/usuario' );
    }
}

module.exports = controlador;