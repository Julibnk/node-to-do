// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;

const toDo = require('./to-do/to-do');
const colors = require('colors');


console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = toDo.getListado();
        
        for ( let tarea of listado){
            console.log('=====Por Hacer====='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        
        if (actualizado){
            console.log('Registro actualizado');
        } else {
            console.log('No se ha podido actualizar');
        }
        
        break;
        case 'borrar':
            let borrar = toDo.borrar(argv.descripcion);
            console.log(borrar);
            break;
    default:
        console.log('Comando desconocido');
        break;
}