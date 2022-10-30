const helper = require('../helpers/usuariosJson')
const bcryptjs = require("bcryptjs");

let controlador ={
    login: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));

        res.render('./vistaLogin/login');
    },
    procesoLogin:(req,res)=>{

        const usuario = helper.leerJson();
        const usuarioEncontrado = usuario.find(function(usuario){
            return usuario.email == req.body.email && bcryptjs.compareSync(req.body.password, user.password)
        })

        if(!usuarioEncontrado){
            return res.render('./vistaLogin/login', { errorLogin: 'No Existe el usuario!' });
        }else{
            req.session.usuarioLogueado = {
                id: usuarioEncontrado.id,
                name: usuarioEncontrado.name,
                email: usuarioEncontrado.email,
            };

            if(req.body.remember){
                res.cookie("remember", usuarioEncontrado.id)
            }

            res.redirect("./vistaCRUDadmin/FormAdmin");
        }
        },
        logout: (req, res)=>{
            req.session.destroy();
            res.clearCookie("remember");
            res.redirect("/");
        }
    }



module.exports = controlador;