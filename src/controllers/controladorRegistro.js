const helper = require('../helpers/usuariosJson')
const bcryptjs = require("bcryptjs");
let controlador ={
    registro: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));

        res.render('./vistaRegistro/registro');
    },
    procesoRegistro:(req,res)=>{
        {
            let usuarios = helper.leerJson();
            console.log(req.file, req.body)
            let usuario = {
                id: usuarios.length + 1,
                nombre: req.body.nombre,
                email: req.body.email,
                password:  bcryptjs.hashSync(req.body.password, 10 ),
                imagen: req.file
            }
            usuarios.push(usuario);
            helper.escribirJson(usuarios);
            res.redirect('/login');}
        }

    }



module.exports = controlador;