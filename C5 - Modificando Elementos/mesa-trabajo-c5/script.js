const header = document.querySelector("header");

const buttonDarkMode = document.querySelector(".darkmode");
console.log(buttonDarkMode);

const h1 = document.querySelector("h1");
// console.log(h1);

const body = document.querySelector("body");
// console.log(body);

const divItem = document.querySelectorAll(".contenedor .item");
// console.log(divItem);

const h2 = document.querySelectorAll("h2");
// console.log(h2);

const parrafos = document.querySelectorAll("p");
// console.log(parrafos);

// let confirmarCambios = confirm("Queres activar el modo oscuro?");

function activeDarkMode() {
  header.classList.toggle("headerDark");
  // buttonDarkMode.classList.toggle("buttonDarkModeWhite");
  h1.classList.toggle("h1Oscuro");
  body.classList.toggle("backOscuro");
  divItem.forEach((items) => {
    items.classList.toggle("divItemOscuro");
  });
  h2.forEach((item) => {
    item.classList.toggle("pH2Oscuro");
  });
  parrafos.forEach((element) => {
    element.classList.toggle("pH2Oscuro");
  });
}
const hola = "chau";
// if (confirmarCambios){
//     h1.classList.toggle('h1Oscuro');
//     body.classList.toggle('backOscuro');
//     divItem.forEach(items => {
//         items.classList.toggle("divItemOscuro");
//     });
//     h2.forEach(item => {
//         item.classList.toggle("pH2Oscuro")
//     });
//     parrafos.forEach(element => {
//         element.classList.toggle("pH2Oscuro")
//     });
// }
