
const express = require('express');
const app = express();

//importaciones de los router

const rutasIndex = require('./routes/rutasIndex');
const rutasDetalle = require('./routes/rutasDetalle');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(rutasIndex);
app.use(rutasDetalle);


// Se obtiene la vista de iniciar sesión
app.get('/login', (req, res) => {
    // res.sendFile(path.join(__dirname, './views/login.html'));
    res.render('./vistaLogin/login');
})
// Se obtiene la vista de registro
app.get('/registro', (req, res) => {
    
        // res.sendFile(path.join(__dirname, './views/registro.html'));
        res.render('./vistaRegistro/registro');
})
// Se obtiene la vista de carrito de adopción de mascostas
app.get('/carro', (req, res) => {
    
        // res.sendFile(path.join(__dirname, './views/carritoMascota.html'));
        res.render('./vistaCarro/carritoMascota');
});

// Se levanta el servidor en el puerto 3030
app.listen(3030, ()=>{
    console.log('Server prendio en el puerto 3030');
})