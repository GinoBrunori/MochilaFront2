// BUCLES
// for in => sirve para iterar objetos.

let obj = {
    nombre: "Bruce",
    apellido: "Wayne",
    edad: 22
}

for (let propiedad in  obj) {
    console.log(`${propiedad}: ${obj[propiedad]}`)
}

// for of => sirve para iterar sobre arrays / strings.
let array = ["Batman", {
    nombre: "Bruce",
    apellido: "Wayne",
    edad: 22
},"Joker"];

let arrayObj = [
    {
        nombre: "Peter Parker",
        apellido: "Parker"
    },
    {
        nombre: "Steve",
        apellido: "Rogers"
    }
]
for (let i of arrayObj) {
    console.log(i)
}