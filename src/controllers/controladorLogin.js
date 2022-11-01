const helper = require('../helpers/usuariosJson')
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
let controlador ={
    login: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));

        res.render('./vistaLogin/login');
    },
    procesoLogin:(req,res)=>{
        const error = validationResult(req);

        if(!error.isEmpty()){
          return res.render("./vistaLogin/login", { errors: error.mapped() })
        };
        const usuario = helper.leerJson();
        const usuarioEncontrado = usuario.find(function(usuario){
            return usuario.email == req.body.email && bcryptjs.compareSync(req.body.password, usuario.password)
        })

        if(!usuarioEncontrado){
            return res.render('./vistaLogin/login');
        }else{
           
            

            res.redirect("/admin");
        }
        },
       
    }



module.exports = controlador;