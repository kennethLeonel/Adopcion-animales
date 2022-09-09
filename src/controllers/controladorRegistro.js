
let controlador ={
    registro: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));

        res.render('./vistaRegistro/registro');
    }
}


module.exports = controlador;