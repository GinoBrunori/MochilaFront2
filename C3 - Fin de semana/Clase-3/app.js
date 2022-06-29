const resultados = [ 'Genial, ganaste!','Esto fue un empate!', 'Una lástima, perdiste!' ];

const puntajes = {
    usuario: 0,
    computadora: 0
}

/* ---------------------------------- JUEGO --------------------------------- */
while(puntajes.usuario < 2 && puntajes.computadora < 2){
    const maquina = numeroAleatorio(1,3);
    const jugador = pedirJugada();

    const opcion = comparacionJugada(jugador,maquina);

    // aumentamos los puntajes segun el resultado 👇
    if(opcion===0){
        puntajes.usuario++;
    } else if( opcion === 2){
        puntajes.computadora++;
    }

    console.table(puntajes);

    alert("Resultado partida: "+ resultados[opcion])
}

// TODO: resolver el cierre de la partida 👇
alert("Partida finalizada");





/* -------------------------------- FUNCIONES ------------------------------- */
function numeroAleatorio(min, max) {
    let numero = parseInt(Math.random()* ((max+1)-min) + min);

    return numero;
}

// recibe 1,2 o 3 para cada jugador
function comparacionJugada(jugador, maquina){
    let resultado = 0;

    if(jugador === maquina){
        resultado = 1;

        // jugador pierde 👇
    } else if((jugador === 1 && maquina === 2) || (jugador === 2 && maquina === 3) || (jugador === 3 && maquina === 1)){
        resultado = 2;
    } 

    return resultado;
}

function pedirJugada(){
    let usuario = 0;
    // pedimos jugada
    do{
        usuario = parseInt(prompt(`Ingrese para jugar:
        1- piedra
        2- papel
        3- tijera`));

        // hasta que cumpla con 👇
    }while(isNaN(usuario) || usuario<1 || usuario>3)

    return usuario;
}