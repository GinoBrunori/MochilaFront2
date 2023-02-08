window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const inputName = document.querySelector('#inputNombre');
    const inputSurname = document.querySelector('#inputApellido');
    const inputEmail = document.querySelector('#inputEmail');
    const inputPassword = document.querySelector('#inputPassword');
    const inputRepPassword = document.querySelector('#inputPasswordRepetida');


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {  
        event.preventDefault();

        const datosUsuario = {
            nombre: inputName.value,
            apellido: inputSurname.value,
            email: inputEmail.value,
            contraseña: inputPassword,
            contraseñaRepetida: inputRepPassword.value
        }

        // llamamos a la funcion 
          realizarRegister(datosUsuario);  

    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(user) {
        const url = 'https://ctd-todo-api.herokuapp.com/v1/users';

        const configuraciones = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(user)
        }

        fetch(url,configuraciones)
        .then(response => response.json())
        .then(data => {
            console.log('RESPUESTA DEL SERVIDOR');
            console.log(data)
        } )
    };
});