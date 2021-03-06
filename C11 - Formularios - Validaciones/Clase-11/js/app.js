const formulario = document.querySelector('form');
const nombre = document.querySelector('#nombre')
const pass = document.querySelector('#pass')
const tel = document.querySelector('#tel')
// const hobbies = document.querySelectorAll('input[name="hobbies"'):
const hobbies = document.getElementsByName('hobbies')
const nacionalidad = document.getElementsByName('nacionalidad')


const datos = {
    nom: "",
    pass: "",
    tel: "",
    hob: [],
    nac: ""
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    // console.log(nombre.value);
    datos.nom = normalizarNombre(nombre.value);
    // console.log(pass.value);
    datos.pass = pass.value;
    datos.pass = pass.value;
    
    // console.log(tel.value);
    datos.tel = tel.value;
    
    hobbies.forEach( hobbie => {
        // console.log(`${hobbie.id} -> ${hobbie.checked}`)
        if(hobbie.checked){
            datos.hob.push(hobbie.id);
        }
        normalizarHobbie(datos.hob);
    })
    nacionalidad.forEach( pais => {
        // console.log(`${pais.id} -> ${pais.checked}`)
        if(pais.checked){
            datos.nac = pais.id;
        }
        datos.nac = normalizarNac(datos.nac);
    })

    formulario.reset();

    
    console.table(datos);
});

// PONER EN MAYUS LOS INPUTS : nombre / hobbies / nacionalidades

function normalizarNombre(nombre) {
    return nombre.toUpperCase();
}

function normalizarHobbie (hobbies) {
    datos.hob = []
    hobbies.forEach(hobbie => {
        datos.hob.push(hobbie.toUpperCase());
    })
}

function normalizarNac (nacion) {
    return nacion.toUpperCase();
}