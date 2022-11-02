const helper=require("../helpers/usuariosJson")

function recordame (req, res, next){
    if(!req.session.usuarioLogueado && req.cookies.recordarme){
        const usuario = helper.leerJson()

        const usuarioEncontrado = usuario.find(function(usuario){
            return usuario.id == req.cookies.recordarme;
        })

        req.session.usuarioLogueado = {
            id: usuarioEncontrado.id,
            nombre: usuarioEncontrado.nombre,
            email: usuarioEncontrado.email,
        };
        return next()
    }
    return next()

}
module.exports = recordame;