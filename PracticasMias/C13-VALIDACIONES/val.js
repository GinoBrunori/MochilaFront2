const form = document.querySelector("form");
const errores = document.querySelector('.errores');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const rol = document.querySelector('#rol');
const condiciones = document.querySelector('#legal');


const contenedorErrores = [];

const estadoUsuario = {
    mail: "",
    pass: "",
    rol: "",
    legal: ""
}

form.addEventListener('submit', (e) => {
    estadoUsuario.mail = normMail(email.value);
    estadoUsuario.pass = normPass(pass.value);
    estadoUsuario.rol = rol.value;
    estadoUsuario.legal = condiciones.checked;

    if (email.value == ""){
        contenedorErrores.push("Por favor ingresa un email");
    }
    
    if (pass.value == ""){
        contenedorErrores.push("Por favor ingresa una contraseña")
    }
    if (contenedorErrores.length > 0){
        e.preventDefault()
        contenedorErrores.forEach(error => {
            errores.innerHTML += `<p><small> ${error} </small></p>`
        })
    }
    
    
    console.log(estadoUsuario)
    
})


// normalizar
function normMail (mail){
    return mail.toLowerCase().trim();
}

function normPass (pass){
    return pass.trim();
}

