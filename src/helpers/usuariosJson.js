

const fs = require('fs');
const path = require('path');


const rutaJson = path.join(__dirname, '../db/usuarios.json');


let helperJson= {
    leerJson: () => {
        const usuarios = JSON.parse(fs.readFileSync(rutaJson, 'utf-8'));
        return usuarios;
    },
    escribirJson: (usuarios) => {
        fs.writeFileSync(rutaJson, JSON.stringify(usuarios, null, 4));
    },
    escribirImagen: (imagen) => {
        fs.writeFileSync(path.join(__dirname, '/img/mascotas/' + imagen.name), imagen.data);
    }
}

module.exports = helperJson;