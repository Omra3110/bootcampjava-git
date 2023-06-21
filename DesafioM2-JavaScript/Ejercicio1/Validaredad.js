const readline = require('readline');
let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question('Ingrese su edad:', function (respuesta) {
    edad = respuesta
    if (edad >= 18) {
        console.log("Bienvenido");
    }
    else {
        console.log("Acceso denegado");
    }

    interfazCaptura.close()
})






