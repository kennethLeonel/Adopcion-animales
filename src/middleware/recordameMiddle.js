const helper=require("../helpers/usuariosJson")

function recordame (req, res, next){
    if(!req.session.usuarioLogueado && req.cookies.recordame){
        const usuario = helper.leerJson()

        const usuarioEncontrado = usuario.find(function(usuario){
            return usuario.id == req.cookies.recordame;
        })

        req.session.usuarioLogueado = {
            id: usuarioEncontrado.id,
            name: usuarioEncontrado.name,
            email: usuarioEncontrado.email,
        };
        return next()
    }
    return next()

}
module.exports = recordame;