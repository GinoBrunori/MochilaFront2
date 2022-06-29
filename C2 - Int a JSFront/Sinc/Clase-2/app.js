/*
    REQUERIMIENTOS
    Piedra, papel o tijera
    - necesitamo 3 opciones para elegir(p,p o t)
    - tenemos 2 jugadores
    - condicion de saber que elemento le gana a qué( reglas de juego)
    - pedir al usuario jugador que haga una eleccion
    - la maquina debe tener una eleccion random
    - ver los resultados, mostrale al usuario cómo salió
*/

const eleccionMaquina = parseInt(Math.random()*3+1);

// 2 (PAPEL) > 1 (PIEDRA) => TRUE
// 3 (TIJERA) > 1 (PIEDRA) => FALSE
// 2 (PAPEL) < 3 (TIJERA) => TRUE

const eleccionUsuario = parseInt(prompt(`Ingrese:
1 - piedra
2 - papel
3 - tijera`));

// Mensajes
let empate = alert("La partida fue un empate!");
let ganaste = alert("Bien, ganaste la partida!");
let perdiste =  alert("Lástima, perdiste la partida!");

function jueguito (eleMaq,eleUsu) {
    if (eleMaq === eleUsu) {
        return empate;
    }
    if (eleUsu === 2 && eleMaq === 1 ) {
        return ganaste;
    }
    if (eleUsu === 1 && eleMaq === 3) {
        return ganaste;
    } 
    if (eleUsu === 3 && eleMaq === 2) {
        return ganaste;
    } else {
        return perdiste;
    }
}

if (Number(eleccionUsuario) && eleccionUsuario <=3 && eleccionUsuario >= 1) {
    // crear funcion
    jueguito(eleccionMaquina,eleccionUsuario)
} 
else {
    alert("Por favor ingrese un numero entre el el 1 y el 3")
}


// let resultado = "";

/* ------------------------ aplicar lógica del juego ------------------------ */





// maquina elige piedra
// if( eleccionMaquina === 1 ){
//     if(eleccionUsuario === 1){
//         resultado = "La partida fue un empate!";
//     }
//     if(eleccionUsuario === 2){
//         resultado = "Bien, ganaste la partida!";
//     }
//     if(eleccionUsuario === 3){
//         resultado = "Lástima, perdiste la partida!";
//     }
// }
// // maquina elige papel
// if( eleccionMaquina === 2 ){
//     if(eleccionUsuario === 1){
//         resultado = "Lástima, perdiste la partida!";
//     }
//     if(eleccionUsuario === 2){
//         resultado = "La partida fue un empate!";
//     }
//     if(eleccionUsuario === 3){
//         resultado = "Bien, ganaste la partida!";
//     }
// }
// // maquina elige tijera
// if( eleccionMaquina === 3 ){
//     if(eleccionUsuario === 1){
//         resultado = "Bien, ganaste la partida!";
//     }
//     if(eleccionUsuario === 2){
//         resultado = "Lástima, perdiste la partida!";
//     }
//     if(eleccionUsuario === 3){
//         resultado = "La partida fue un empate!";
//     }
// }

console.log("MAQUINA: "+eleccionMaquina);
console.log("USUARIO: "+eleccionUsuario);

// mostramos el resultado de la partida
// alert("RESULTADO: "+resultado);



