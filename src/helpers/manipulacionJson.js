

const fs = require('fs');
const path = require('path');


const rutaJson = path.join(__dirname, '../db/mascotas.json');


let helperJson= {
    leerJson: () => {
        const mascotas = JSON.parse(fs.readFileSync(rutaJson, 'utf-8'));
        return mascotas;
    },
    escribirJson: (mascotas) => {
        fs.writeFileSync(rutaJson, JSON.stringify(mascotas, null, 4));
    }
}

module.exports = helperJson;