//Normalizar: preparar la data para dps mandarla al servidor


let string = "Gino Brunori, Lucio Brunori";

// let convEnArray = string.split(", ") //=> indica que cosas de separar
// let convEnArray = string.split(" ") //=> indica que cosas de separar
let convEnArray = string.split() //=> indica que cosas de separar / convierte todo en un array
console.log(convEnArray);
/* -------------------------------------------------------------------------- */

let array = [2,4,6,8,10];

let arrayDoble = array.map(num => num*2 );
console.log(arrayDoble);

let arrayFiltrado = array.filter(num => {
    if (num < 8){
        return num;
    }
})

console.log(arrayFiltrado);

const productos = [
    { id: "132984738290", nombre: "Camiseta", precio: 500 },
    { id: "132984435340", nombre: "Zapato", precio: 2000 },
    { id: "132984897590", nombre: "Camiseta", precio: 1500 } 
]

//! MAP : es un metodo que devuelve un nuevo array según las condiciones de una function. No filtra nada, devolverá todos los elementos.

//TODO Cambiar precios 👇
const precioCambiados = productos.map(producto => {
    return producto.precio + 100;
})
console.log(precioCambiados);

//TODO Guardar id de los productos en una var
// Forma 1) 👇
// map(elemento,indice del elemento, array donde se encuentra el elemento)
// Ej: map(numero, posicion, numeros);

const producID = productos.map((producto, index) => { 
    return (`Producto ${index}: ${producto.id}`)
});
console.log({producID});

// Forma 2 👇
const productID2 = productos.map(({id}) => id);
console.log({productID2});

// const productosConDescuento = productos.map(producto => {
//     if (producto.precio < 1000){
//         return producto;
//     }

//     return {
//         ...producto,
//         precio: producto.precio * 0.9
//     }

// })
// console.log({productosConDescuento});
/* -------------------------------------------------------------------------- */

//todo| Filtrar los productos con precio menor a 1000 👇
//* Forma 1 
const productosBaratos = productos.filter(producto => producto.precio < 1000);
console.log(productosBaratos);

//* Forma 2
//Funcion que dice si un producto es barato 👇
const esBarato = producto => producto.precio < 1000;
const productosBaratos2 = productos.filter(esBarato); // luego utilizamos esta funcion 👈 para filtrar todos los productos que cumplan con esta.
console.table(productosBaratos2);

//todo| Filtrar los productos con precio mayor a 1000
const esCaro = productoCaro => !esBarato(productoCaro);
const productosCaros = productos.filter(esCaro);

console.table(productosCaros);