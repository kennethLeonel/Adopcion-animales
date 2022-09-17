
const express = require('express');
const app = express();

//importaciones de los router

const rutasIndex = require('./routes/rutasIndex');
const rutasDetalle = require('./routes/rutasDetalle');
const rutasLogin =  require('./routes/rutasLogin');
const rutasRegistro = require('./routes/rutasRegistro');
const rutasCarro = require('./routes/rutasCarro');
const rutasAdmin = require('./routes/admin/rutasAdmin');
const rutasFormAdmin = require('./routes/admin/rutasFormAdmin');
const rutasEditAdmin = require('./routes/admin/rutasEditAdmin');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// se utiliza el motor ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


//----------Direccionamiento de las rtutas-------------

// Se obtiene la rutas Home
app.use('/',rutasIndex);
// Se obtiene la rutas de detalle de la mascota
app.use('/detalle',rutasDetalle);
// Se obtiene la rutas de iniciar sesión
app.use('/login', rutasLogin );
// Se obtiene las rutas de registro
app.use('/registro', rutasRegistro);
// Se obtiene las rutas de carro de mascotas
app.use('/carro', rutasCarro);

// Se obtiene las rutas de administrador
app.use('/admin', rutasAdmin);


// Se obtiene las ruta del formulario que agrega
app.use('/form', rutasFormAdmin);


// Se obtiene las rutas del formulario que edita
app.use('/edit', rutasEditAdmin);


// Se levanta el servidor en el puerto 3030
app.listen(3030, ()=>{
    console.log('Server prendio en el puerto 3030');
})