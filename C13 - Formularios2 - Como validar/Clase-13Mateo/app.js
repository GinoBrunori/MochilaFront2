/* -------------------------- estado por defecto ------------------------- */
const estadoUsuario = {
    email: "",
    password: "",
    legal: false
};

const erroresPresentes = [];

const errores = {
    email: 'Email no válido o incorrecto.',
    password: 'Contraseña no válida o incorrecta.',
    legal: 'Es necesario aceptar los términos y condiciones.'
};

/* ---------------------------------- nodos --------------------------------- */

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputLegal = document.querySelector('#legal');
const cajaErrores = document.querySelector('.errores');
const formulario = document.forms[0];


inputEmail.addEventListener('focus', function(){
    console.log("Se dispario el evento FOCUS");
});
inputEmail.addEventListener('blur', function(){
    console.log("Se dispario el evento BLUR");
});
inputEmail.addEventListener('input', function(){
    console.log("Se dispario el evento INPUT");

    // actualizamos el estado en cada cambio del input
    estadoUsuario.email = inputEmail.value
    
    if(validarEmail(estadoUsuario.email)){
        inputEmail.classList.add('border-ok')
    }else{
        inputEmail.classList.remove('border-ok')
    }

    // Esto lo agregue yo (Gino) => le agrega un borde rojo cuando no esta validado
    if(!validarEmail(estadoUsuario.email)){
        inputEmail.classList.add('border-red')
    }else{
        inputEmail.classList.remove('border-red')
    }
});

inputPassword.addEventListener("input", function(){
    estadoUsuario.pass = inputPassword.value;
    if (validarPassword(estadoUsuario.pass)){
        inputPassword.classList.add('border-ok')
    }else {
        inputPassword.classList.remove('border-ok')
    }

    // Esto lo agregue yo (Gino )
    if(!validarPassword(estadoUsuario.pass)){
        inputPassword.classList.add('border-red')
    }else{
        inputPassword.classList.remove('border-red')
    }
})



formulario.addEventListener('submit', function (evento) {
    // prevenimos el default para manejar nosotros el comportamiento
    evento.preventDefault();

    cajaErrores.innerHTML = 'iniciando sesión...'

    // actualizo el estado de la pantalla con los datos ya normalizados 👇
    estadoUsuario.email = normalizarTexto(inputEmail.value);
    estadoUsuario.password = normalizarContrasenia(inputPassword.value);
    estadoUsuario.legal = inputLegal.checked;


    // validar campos 👇
    const correoValidado = validarEmail(estadoUsuario.email)
    const contraseniaValidada = validarPassword(estadoUsuario.password)
    const terminosValidados = validarLegal(estadoUsuario.legal);

    
    // simulamos conectar con el servidor 👇 // mas adelante los hacemos con promesas
    setTimeout(function () {

        // simulamos la validacion dentro del servidor 👇
        if (correoValidado && contraseniaValidada && terminosValidados) {
            location.replace('/usuario.html')

            // TODO: nos falta pasarle a la siguiente pagina las credenciales
            // para eso vamos a implementar local storage
        } else {
            //renderizar cambios 👇
            cajaErrores.innerHTML = listarErrores(erroresPresentes);
        }

        // Limpiamos los ultimos errores
        erroresPresentes.length = 0;
    }, 3500);


});


/* -------------------------------------------------------------------------- */
/*                                RENDERIZADOS                                */
/* -------------------------------------------------------------------------- */
function listarErrores(listado) {
    /*   
    let contenido = [];

       listado.forEach(item => {
           contenido.push(`<p><small>${item}</small></p>`);
       })

       contenido = contenido.join('');
       */
    // ☝simplifico con un map 👇
    const contenido = listado.map(item => `<p><small>${item}</small></p>`).join('')
    return contenido;
}



/* -------------------------------------------------------------------------- */
/*                              FUNCIONES UTILES                              */
/* -------------------------------------------------------------------------- */
function normalizarTexto(texto) {
    // paso todo a minusculas y quito espacios sobrantes 👇
    return texto.toLowerCase().trim();
}

function normalizarContrasenia(texto) {
    // quito espacios sobrantes 👇
    return texto.trim();
}

function validarEmail(email) {
    let resultado = false;

    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    // si pasa las pruebas lo damos por válido 👇
    // if (email.includes('@') && email.includes('.') && !email.includes(' ') && email.length > 5) {
    //     resultado = true;
    // } else {
    //     // agrego el mensaje correspondiente 👇
    //     erroresPresentes.push(errores.email);
    // }
    
    // EJEMPLO CON EXPRESION REGULAR 👇
    if (regex.test(email)) {
        resultado = true;
    } else {
        // agrego el mensaje correspondiente 👇
        erroresPresentes.push(errores.email);
    }

    return resultado;
}

function validarPassword(password) {
    let resultado = false;
    // si pasa las pruebas lo damos por válido 👇
    if (password.length > 4 && !password.includes(' ')) {
        resultado = true;
    } else {
        // agrego el mensaje correspondiente 👇
        erroresPresentes.push(errores.password);
    }

    return resultado;
}

function validarLegal(verificacion) {
    let resultado = false;
    // si pasa las pruebas lo damos por válido 👇
    if (verificacion) {
        resultado = true;
    } else {
        // agrego el mensaje correspondiente 👇
        erroresPresentes.push(errores.legal);
    }

    return resultado;
}