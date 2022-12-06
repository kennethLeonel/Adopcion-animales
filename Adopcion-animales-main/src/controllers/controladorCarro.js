const helper = require('../helpers/manipulacionJson')
let mascotasCarro  =[];
let vacio = true;

let controlador ={
    carrito: (req, res) => {
        let mascotas = helper.leerJson();
        // res.sendFile(path.join(__dirname, './views/index.html'));
        let id = req.params.id;
        if (id != undefined) {
            let mascota = mascotas.find(mascota => mascota.id == id);
            if (mascotasCarro.length == 0) {
                console.log('hey soy el primer dato')
                mascotasCarro.push(mascota);
            }else{
                mascotasCarro.forEach(mascotaC => {
                    if (mascotaC.id != mascota.id) {
                        mascotasCarro.push(mascota);
                        console.log('hey soy un dato nuevo');  
                    }
                    else{
                        console.log('hey soy un dato repetido');  
                    }
                });
            }
            vacio = false;
        }
        if(mascotasCarro.length < 0){
            vacio = true;
            mascotasCarro  =[];
        }

        res.render('./vistaCarro/carritoMascota', {mascotasCarro: mascotasCarro, vacio: vacio});
    }
}


module.exports = controlador;