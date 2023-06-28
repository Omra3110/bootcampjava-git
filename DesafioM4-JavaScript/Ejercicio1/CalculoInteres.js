
const data = [
    ["Plan 001", 150000, 30, 0.15],
    ["Plan 002", 300000, 180, 0.10],
    ["Plan 003", 485000, 60, 0.23],

];


mejorPlan= obtenerMejorPlan(data)
console.log("El plan mas conveniente para la empresa es :"+plan)

function obtenerMejorPlan(planes) {
    for (x = 0; x < planes.length; x++) {
        plan = planes[x]
        capital = plan[1]
        plazo = plan[2]
        tasa = plan[3]
        interes = (capital * plazo * tasa) / 100
        planes[x].push(interes)

    }
    menorInteres=0
    plan = planes[0]
    console.log(planes)

    for (x = 0; x < planes.length; x++) {
        interesActual = plan[4]
        if (x == 0) {
            menorInteres = interesActual
            mejorPlan = plan
        }
        else if(menorInteres > interesActual) {
            menorInteres = interesActual
            mejorPlan = plan
        }
    }
    return plan
}
