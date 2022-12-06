const helper = require('../helpers/usuariosJson')

const bcryptjs = require("bcryptjs");

const {validationResult}=require("express-validator")

let controlador ={
    registro: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));

        res.render('./vistaRegistro/registro');
    },
    procesoRegistro:(req,res)=> {
            const error = validationResult(req)
            if(!error.isEmpty()){
                
               return res.render("./vistaRegistro/registro", { errors: error.mapped(), old: req.body })
            }
            let usuarios = helper.leerJson();
            console.log(req.file)
            let usuario = {
                id: usuarios.length + 1,
                nombre: req.body.nombre,
                email: req.body.email,
                password:bcryptjs.hashSync(req.body.password, 10 ),
                img:"/img/users/" + req.file?.originalname,
                
            }
            usuarios.push(usuario);
            helper.escribirJson(usuarios);
            res.redirect('/login');
        
        
        }

    }



module.exports = controlador;