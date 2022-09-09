
let controlador ={
    vista: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));

        res.render('./vistaCRUDAdmin/crudAdmin');
    }
}


module.exports = controlador;