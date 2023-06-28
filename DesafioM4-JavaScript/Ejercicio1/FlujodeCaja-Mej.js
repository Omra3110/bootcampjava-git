
const data = [
    ["Enero", 1500, 1500],
    ["Febrero", 2500, 2500],
    ["Marzo", 84683, 1155],
    ["Abril", 135353, 1533],
    ["Mayo", 1535, 5434],
    ["Junio", 4343354, 5434543],
    ["Julio", 435453, 4543],
    ["Agosto", 78351, 7816],
    ["Septiembre", 1878, 95634],
    ["Octubre", 48483, 9433],
    ["Noviembre", 35483, 53133],
    ["Diciembre", 3843, 348133],

];

resultado = calculoFlujoCaja(data)
console.log("El calculo de flujo de caja es:" + resultado)

function calculoFlujoCaja(flujoCaja) {
    ingreso = 0
    egreso = 0


    for (x = 0; x < flujoCaja.length; x++) {
        mes = flujoCaja[x]
        ingreso += mes[1]
        egreso += mes[2]
    }
    resultado = ingreso - egreso

    console.log("El flujo de caja es :" + resultado)
   

    if (resultado > 0) {
        return 1;
    } else if (resultado == 0) {
        return 0;
    }
    return -1
}
