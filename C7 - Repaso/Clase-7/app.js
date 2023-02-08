const listadoImagenes = [];

const contenedor = document.querySelector('#contenedor');
const item = document.querySelectorAll(".item");

item.forEach(item => {
    item.innerHTML = `<a class="rutas-img"> <img> </a>`
});


const nodosImg = document.querySelectorAll('.item img');
// le pedimos al usuario links para nuestro listado
nodosImg.forEach( (item,indice) => {
    listadoImagenes.push(prompt("ingrese un link de una imagen"));
    item.setAttribute("src", listadoImagenes[indice]);
});


const a = document.querySelectorAll("a");

a.forEach((item, indice) => {
    item.setAttribute("href", listadoImagenes[indice] )
});



