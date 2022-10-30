function middleware (req, res , next){

    if(req.session.usuarioLogueado){
        next()
    }else{
        res.redirect("/login")
    }


}

module.exports = middleware;