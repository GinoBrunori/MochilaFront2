let formulario = document.querySelector("form");
const inputs = document.getElementsByName("pais");
const checkboxes = document.getElementsByName("comida");
const nombre = document.querySelector('#nombre');
const pass = document.querySelector("#pass");
const apellido = document.querySelector("#apellido");

const datos = {
    nom: "",
    ape: "",
    pass: "",
    pais: "",
    comidas: []
}

formulario.addEventListener("submit", function(event) {
event.preventDefault()

datos.nom = ponerEnMayusText(nombre.value);
datos.ape = ponerEnMayusText(apellido.value)
datos.pass = pass.value;


inputs.forEach(pais => {
    if (pais.checked) {
        console.log(`Pais Seleccionado: ${pais.value}`);
        // console.log(`Seleccionado ${elemento.checked}`)
        datos.pais = pais.value;
    }
})

checkboxes.forEach((comida) => {
    if (comida.checked) {
        console.log(`Comida Seleccionada: ${comida.value}`);
        datos.comidas.push(comida.value)
    }
    // console.log(`Comida numero: ${i}`);
})

console.table(datos)
})


// Normalizando datos

function ponerEnMayusText(texto){
    // const nombre = texto.charAt(0).toUpperCase();
    const primeraLetra = texto.slice(0,1).toUpperCase();
    // const mayusPrimeraLetra = primeraLetra.toUpperCase();
    
    const continuacion = texto.slice(1).toLowerCase();
    // const cont = continuacion.toLowerCase();
    return (`${primeraLetra}${continuacion}`)
}




