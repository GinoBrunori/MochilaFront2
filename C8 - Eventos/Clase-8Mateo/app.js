// estado de la app
let contador = 0;

// nodos del dom
const nodoNumero =  document.querySelector('#numero');
const boton = document.querySelector('#btn');
const botonRestar = document.querySelector('#btnRestar');
const texto = document.getElementById('texto');
const btnDeportes = document.querySelector('#deporte');
const btnEconomia = document.querySelector('#economia');

btnDeportes.addEventListener('click', function(){
    // capturamos todos los parrafos
    const deportes = document.querySelectorAll('.deportes');
    // les togleamos la clases "grande"
    deportes.forEach(noticia => {
        noticia.classList.toggle('grande');
    })
})
btnEconomia.addEventListener('click', function(){
    // capturamos todos los parrafos
    const economicas = document.querySelectorAll('.economicas');
    // les togleamos la clases "grande"
    economicas.forEach(noticia => {
        noticia.classList.toggle('grande');
    })
})

boton.addEventListener('click', function(evento){
    sumarUno();
    console.log(evento);
});

botonRestar.addEventListener('click', function(){
    restarUno()
})


boton.addEventListener('dblclick', alertar);

document.addEventListener('keydown', function(event){
    console.log(event);
    if(event.key === "Shift"){
        alert("Por favor no toques shift")
    }
    texto.innerHTML+=event.key

})





/* -------------------------------- FUNCIONES ------------------------------- */
function sumarUno() {
    // aumentamos en 1 el contador
    contador++;
    // renderizamos este nuevo valor
    nodoNumero.textContent = contador;
    console.log(contador);
}
function restarUno() {
    // aumentamos en 1 el contador
    contador--;
    // renderizamos este nuevo valor
    nodoNumero.textContent = contador;
    console.log(contador);
}

function alertar() {
    alert("Se hizo click")
}