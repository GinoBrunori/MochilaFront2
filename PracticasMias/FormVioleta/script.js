// Capturo los nodos

const form = document.forms[0];
const nombreCompleto = document.querySelector('#nombre');
const contraseña = document.querySelector("#pass");
const tel = document.querySelector("#tel");
const hobbies = document.getElementsByName("hobbies");
const nacionalidades = document.getElementsByName("nacionalidad");

let datos = {
    nomCompleto: "",
    pass: "",
    tel: "",
    hobbies: [],
    nac: ""
}

// eventos
form.addEventListener("submit", e => {
    e.preventDefault();

    datos.nomCompleto = pasarAMayus(nombreCompleto.value);
    datos.pass = contraseña.value;
    datos.tel = tel.value;

   hobbies.forEach(hobbie => {
    if(hobbie.checked){
        datos.hobbies.push(hobbie.id)
    }
   })

    nacionalidades.forEach(nac => {
        if(nac.checked){
            datos.nac = nac.id;
        }
    })

    console.log(datos);
    // form.reset();
})

// Normalizar
function pasarAMayus(texto){
    const primeraLetra = texto.slice(0,1).toUpperCase();
    const continuacion = texto.slice(1).toLowerCase();
    return (`${primeraLetra}${continuacion}`)
}


