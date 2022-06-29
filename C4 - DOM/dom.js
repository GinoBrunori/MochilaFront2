// let titulo = document.querySelector(".title");

// if (titulo != null) { //* esto sirve para que no aparezca "null" en la consola. El null aparece cuando no encuentra el query selector en el archivo html. Ej: en contacto.html
//     console.log(titulo);    
// }

// let losParrafos = document.querySelectorAll('p');

// if (losParrafos != null) {
//     console.log(losParrafos);
// }

// let footer = document.querySelector("footer");

// if (footer != null) {
//     console.log(footer);    
// }

// let images = document.querySelectorAll("img");

// if (images != null) {
//     console.log(images)
// }

// innerText => te permite cambiar el contenido o agregar texto.
let fuck = document.querySelector(".fucker");
console.log(fuck);
fuck.innerText += " niggga";
fuck.style.backgroundColor = "yellow"

//innerHTML => te permite cambiar el contenido o agregar texto con etiquetas HTML.
let ache2 = document.querySelector(".ache2");
console.log(ache2)
ache2.innerHTML += " <i> hola en cursiva </i>"; // 

//style => Nos permite leer y sobreescribir las reglas CSS que se aplican sobre un
// elemento que hayamos seleccionado. La propiedad se escribe sin guiones

ache2.style.color = "blue";
ache2.style.fontSize = "50px";

console.log(ache2.style);


/* -------------------------------------------------------------------------- */

/* ---------------------------- TEMPLATE STRINGS ---------------------------- */
const miNombre = "Gino";
const frase = `Mi nombre es ${miNombre}`;
console.log(frase);

let multi = `2 * 3 es: ${2 *3}`;
console.log(multi);

function suma (a,b) {
    return a + b;
}

const resultado = `El resultado es: ${suma(2,2)}`;
console.log(resultado);

const template = `<h1> Hola mundo </h1>`;

// const body = document.getElementById('body');
// body.innerHTML = template;
// body.innerText = template;

function escribirHTML(titulo, texto) {
    const body = document.getElementById('body');
    const miTemplate = `
    <h1>${titulo}</h1>
    <p>${texto}</p>
    `;
    body.innerHTML += miTemplate;
}

escribirHTML("hola",'que tal');

// STYLE + IF + CONFIRM
// let confirmarCambios = confirm("Desea confirmar los cambios?");

// if (confirmarCambios) {
//     body.style.backgroundColor = "pink";
//     const image = document.querySelector('img');
//     image.style.display = "none";

// }

// let eligeUnColor = prompt("que color de fondo deseas deseas?");

// function colorDeFondo (color) {
//     if (eligeUnColor.length >= 0 && eligeUnColor.length < 2 ) {
//         alert('elige un color valido');   
//     } else {
//     body.style.backgroundColor = color;
// }
// }

// colorDeFondo(eligeUnColor);

/* -------------------------------- classList ------------------------------- */
let parrafo = document.querySelector('p');
console.log(parrafo);
let body = document.getElementById('body')
let confirmarCambios = confirm('Desea aplicar los estilos?');

if (confirmarCambios) {
    parrafo.classList.toggle('classLista');
    body.classList.add('bodyDark')
}

