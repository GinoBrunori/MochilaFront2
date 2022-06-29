// ALERT
// alert("hola");

// CONFIRM:  El valor que nos va a retornar es un booleano indicando true si pulsamos Aceptar y false si elegimos Cancelar.
// let confirmacion = confirm("Queres agua?"); 
// console.log(confirmacion);

// function conf (confir) {
//     if (confir == true) {
//         alert("el loco quiere agua");
//     } else {
//         alert("el loco no quiere agua")
//     }
// };
// conf(confirmacion);

// PROMPT : devuelve lo que escriba el usuario. siempre es un string
// Al utilizar un espacio en memoria para guardar este dato, podremos utilizarlo como información. En el caso de que el usuario seleccione “Cancelar”, el resultado que nos retorna es null. En cambio, si el usuario presiona “Aceptar” sin completar nada, nos devolverá un texto vacío.
// let tuNombre = prompt("Ingresa tu nombre"); // 
// console.log(tuNombre);

// Funciones
// parseInt => cambia una cadena de texto a un numero entero. 
// let edad1 = parseInt( prompt("Ingrese su edad"));
// console.log(edad1);

// parseFloat => cambia una cadena de texto a un numero con coma.
// let gramos = parseFloat(prompt("Cuanto pesa el pan?"));
// console.log(gramos);


// let tratoPersonalizado = confirm("¿Desea un trato personalizado?")

// if(tratoPersonalizado){
//     let nombre = prompt("Por favor, introduzca su nombre");
//     alert("Le damos la bienvenida a nuestro sitio "+ nombre +". ¡Muchas     gracias por visitarnos, estamos a su disposición! ?");
// } else {
//     alert("Gracias por conectarse.")
// }


// OBJETO Math: tiene propiedades y metodos para constantes y funciones matematicas.
// Rara vez implementaremos alguna de las propiedades, pero estas se
// encuentran todas más que disponibles.

// Propiedad PI
// let numeroPi = Math.PI;
// console.log(numeroPi)

// METODOS

// random => Retorna un punto flotante, un número pseudoaleatorio dentro del rango [0, 1).Incluye el 0 pero no el 1. 
let random = Math.random() + 2;
console.log(random);

// round => Retorna el valor de un número redondeado al entero más cercano.
// let cercano = Math.round(11.3);
// console.log(cercano);

// max => Devuelve el mayor de cero o más números. / *Si al menos uno de los argumentos no puede ser convertido a número, el resultado es NaN.
// let numeros = [1,4,7,432,222]; => no deja pasarle arrays. solo numeros en los ()
// let mayor = Math.max(2222.6,45,787,22);
// console.log(mayor);


// función isNaN( ), la cual nos devuelve true si el valor dado como parámetro es NaN.

let edad = parseInt(prompt("Ingrese su edad"));
 if (isNaN(edad) == true) {
     console.log("Por favor ingresa un numero")
 } else if (edad > 18) {
    console.log("Sos mayor de edad")
 } else {
     console.log("sos menor de edad")
 }


// (Math.random()*10+1) => para que te de un num entre 1 y 10

// .floor redondea siempre para abajo
// Math.ceil() => redondea siempre para arriba
// .trunc corta toda la parte decimal

// .trunc metodo de obj
// - parseInt => window 
/* ---------------------------------- hola ---------------------------------- */
