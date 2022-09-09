

let controlador ={
    login: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));

        res.render('./vistaLogin/login');
    }
}


module.exports = controlador;