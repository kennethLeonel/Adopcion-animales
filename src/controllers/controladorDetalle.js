
        let mascotas = [{
            id: 1,
            nombre: 'Max',
            edad: 2,
            sexo: 'Macho',
            raza: 'Lobo siberiano + Chiguagua',
            tipoMascota: 'Perro',
            adoptado: false,
            cantidadVacunas: 2,
            ciudad: 'Bogotá',
            pais : 'Colombia',
            descripcion: 'Max es un perro muy cariñoso y juguetón. ',
            img: "/img/perro1.jpg",
            actitud: 'Juguetón',
        },
        {
            id: 2,
            nombre: 'Toby',
            edad: 5,
            sexo: 'Macho',
            raza: 'Bulldog',
            tipoMascota: 'Perro',
            adoptado: false,
            cantidadVacunas: 6,
            ciudad: 'Buenos Aires',
            pais : 'Argentina',
            descripcion: 'Toby es un perro muy cariñoso y dormilón.',
            img: "/img/perro2.jpg",
            actitud: 'Hogareño',
        },
        {
            id: 3,
            nombre: 'Neku',
            edad: 2,
            sexo: 'Macho',
            raza: 'Gato de pelo corto',
            tipoMascota: 'Gato',
            adoptado: false,
            cantidadVacunas: 1,
            ciudad: 'Montevideo',
            pais : 'Uruguay',
            descripcion: 'Neku Es un gato muy tranquilo y no maulla mucho.',
            img: "/img/gato1.jpg",
            actitud: 'Tranquilo',
        },
        {
            id: 4,
            nombre: 'Mikaela',
            edad: 2,
            sexo: 'Hembra',
            raza: 'Gato siamés',
            tipoMascota: 'Gato',
            adoptado: false,
            cantidadVacunas: 2,
            ciudad: 'Barranquilla',
            pais : 'Colombia',
            descripcion: 'Mikaela es un gato que Le encanta jugar con niños.',
            img: "/img/gato2.jpg",
            actitud: 'Juguetón',
        },
        {
            id: 5,
            nombre: 'roger',
            edad: 1,
            sexo: 'Macho',
            raza: 'Cuy Pastusense',
            tipoMascota: 'Hamster',
            adoptado: false,
            cantidadVacunas: 0,
            ciudad: 'Pasto',
            pais : 'Colombia',
            descripcion: 'roger es un hamster muy inquieto a la hora de jugar.',
            img: "/img/hamster1.jpg",
            actitud: 'Inquieto',
        },
        {
            id: 6,
            nombre: 'Dan',
            edad: 1,
            sexo: 'Macho',
            raza: 'Cuy Argentino',
            tipoMascota: 'Hamster',
            adoptado: false,
            cantidadVacunas: 0,
            ciudad: 'Cordoba',
            pais : 'Argentina',
            descripcion: 'Dan es un hamster muy alegre a la hora de jugar.',
            img: "/img/hamster2.jpg",
            actitud: 'Alegre',
        },
    ]

let controlador1 ={
    detalle: (req, res) => {
        // res.sendFile(path.join(__dirname, './views/index.html'));
        let id = req.params.id;
        let mascota = mascotas.find(mascota => mascota.id == id);
        console.log(mascota);
        res.render('./vistaDetalle/detalleMascota', {mascota: mascota});
    }
}

module.exports = controlador1;