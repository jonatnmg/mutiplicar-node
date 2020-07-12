const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        
        let limiteNuevo = !Number(limite) ? 10 : limite;

        if (!Number(base)) {
            reject(`La base: ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limiteNuevo; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limiteNuevo}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limiteNuevo}.txt`);
        });

    });
}

let listarTabla = (base, limite = 10) => {

    let limiteNuevo = !Number(limite) ? 10 : limite;
    if (!Number(base)) {
        reject(`La base: ${base} no es un número`);
        return;
    }

    console.log('=============================================='.green);
    console.log(`======== Tabla del número: ${base}, Limite: ${limiteNuevo} ======`.green);
    console.log('=============================================='.green);

    for (let i = 1; i <= limiteNuevo; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}

