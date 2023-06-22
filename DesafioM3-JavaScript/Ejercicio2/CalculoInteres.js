
const data = [
    ["Plan 001", 150000, 30, 15],
    ["Plan 002", 300000, 180, 10],
    ["Plan 003", 485000, 60, 23],

];

for (x = 0; x < data.length; x++) {
    plan = data[x]
    capital = plan[1]
    plazo = plan[2]
    tasa = plan[3]
    interes = (capital * plazo * tasa) / 100
    data[x].push(interes)

}

console.log(data)

