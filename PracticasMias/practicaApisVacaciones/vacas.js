// import {html} from 'lit-html';
const btnFront = document.querySelector(".contenedor .btn-frontIMG")
const btnBack = document.querySelector(".contenedor .btn-backIMG")
const contenedorFront = document.querySelector(".contenedor .contenedor-front");
const contenedorBack = document.querySelector(".contenedor .contenedor-back");



// FRONT
btnFront.addEventListener("click", () =>{
    let numAleatorio = Math.round(Math.random()*100+1);
    const url = `https://pokeapi.co/api/v2/pokemon/${numAleatorio}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("DATA 👇")
        console.log(data)
        renderizarPokemonFront(data)
    })
})


function renderizarPokemonFront (datos) {
    contenedorFront.innerHTML = "";
    contenedorFront.innerHTML += `
    <h1 class = "nombre-PK-Front"> ${datos.name.toUpperCase()} </h1>
    <span class = "orden-PK-Front">  ${datos.order} </span>
    <img class= "img-PK-Front" src="${datos.sprites.front_default}"> 
    `
}

// BACK

btnBack.addEventListener("click", () => {
    let numAleatorio2 = Math.round(Math.random()*100+1);
    const url2 = `https://pokeapi.co/api/v2/pokemon/${numAleatorio2}`;
    fetch(url2)
    .then(response => response.json())
    .then(data => {
        console.log("DATA 👇")
        console.log(data)
        renderizarPokemonBack(data)
    })
})

function renderizarPokemonBack (datos) {
    contenedorBack.innerHTML = `
    <h1 class = "nombre-PK-Back"> ${datos.name.toUpperCase()} </h1>
    <span class = "orden-PK-Back">  ${datos.order} </span>
    <img class= "img-PK-Back" src="${datos.sprites.back_default}"> 
    `
}