const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/mutiplicar');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado`, `${archivo}`.green))
            .catch(err => console.log(`Error=>`, err));

        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
}


