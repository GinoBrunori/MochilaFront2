const h1 = document.querySelector('h1');
// console.log(h1);

const body = document.querySelector('body');
// console.log(body);


const divItem = document.querySelectorAll('.contenedor .item');
// console.log(divItem);

const h2 = document.querySelectorAll('h2');
// console.log(h2);

const parrafos = document.querySelectorAll ('p');
// console.log(parrafos);

let confirmarCambios = confirm("Queres activar el modo oscuro?");

if (confirmarCambios){
    h1.classList.toggle('h1Oscuro');
    body.classList.toggle('backOscuro');
    divItem.forEach(items => {
        items.classList.toggle("divItemOscuro");
    });
    h2.forEach(item => {
        item.classList.toggle("pH2Oscuro")
    });
    parrafos.forEach(element => {
        element.classList.toggle("pH2Oscuro")
    });
}   
