
const express = require('express');
const app = express();

//importaciones de los router

const rutasIndex = require('./routes/rutasIndex');
const rutasDetalle = require('./routes/rutasDetalle');
const rutasLogin =  require('./routes/rutasLogin');
const rutasRegistro = require('./routes/rutasRegistro');
const rutasCarro = require('./routes/rutasCarro');
const rutasAdmin = require('./routes/admin/rutasAdmin');
const localsMiddleware = require("./middleware/localsMiddle");
const recordameMiddleware = require("./middleware/recordameMiddle");
const path = require('path');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(session({
  secret:"Secreto",
  resave: false ,
  saveUninitialized: true 
}))
// se utiliza el motor ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//-------MIDDLEWARES------------
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(recordameMiddleware);
app.use(localsMiddleware);
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



// Se levanta el servidor en el puerto 3030
app.listen(3030, ()=>{
    console.log('Server prendio en el puerto 3030');
})