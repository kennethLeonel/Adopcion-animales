
const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Se obtiene la vista de home + gallery
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, './views/index.html'));
})


// Se obtiene la vista de  detalle de la mascota
app.get('/detalle', (req, res) => {

    res.sendFile(path.join(__dirname, './views/detalleMascota.html'));
})
// Se obtiene la vista de iniciar sesión
app.get('/login', (req, res) => {

    res.sendFile(path.join(__dirname, './views/login.html'));
})
// Se obtiene la vista de registro
app.get('/registro', (req, res) => {
    
        res.sendFile(path.join(__dirname, './views/registro.html'));
})
// Se obtiene la vista de carrito de adopción de mascostas
app.get('/carro', (req, res) => {
    
        res.sendFile(path.join(__dirname, './views/carritoMascota.html'));
});

// Se levanta el servidor en el pyuerto 3030
app.listen(3030, ()=>{
    console.log('Server prendio en el puerto 3030');
})