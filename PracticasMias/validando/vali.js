let errores = [];
const form = document.querySelector('form');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');

form.addEventListener('submit', function(e) {
    if (nombre.value == ""){
        errores.push("Por favor complete el nombre");
    }

    if (apellido.value == ""){
        errores.push("Por favor complete su apellido")
    }
    
    
    if (errores.length > 0){
        e.preventDefault();
        const divErrores = document.querySelector(".errores ul");
        errores.forEach(error => {
            divErrores.innerHTML += `<li> ${error} </li>`;
        })
    }
    
    errores.length = 0;
    form.reset();
})