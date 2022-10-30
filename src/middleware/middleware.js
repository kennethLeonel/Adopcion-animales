function middleware (req, res , next){

    if(req.session.usuarioLogueado){
        next()
    }else{
        res.redirect("/src/views/vistaCRUDAdmin/FormAdmin.ejs")
    }


}

module.exports = middleware;