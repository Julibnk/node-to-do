const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Tarea completada'
}

const argv = require('yargs')
    .command('crear', 'Crear una nota', {
        descripcion
    })
    .command('borrar', 'Borra una nota', {
        descripcion
    })
    .command('actualizar', 'Actualizar una nota', {
        descripcion,
        completado
    }).help()
    .argv;


module.exports = {
    argv
}