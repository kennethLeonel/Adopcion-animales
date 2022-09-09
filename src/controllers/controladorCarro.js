

let controlador ={
    carrito: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));

        res.render('./vistaCarro/carritoMascota');
    }
}


module.exports = controlador;