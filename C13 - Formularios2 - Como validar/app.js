// window.addEventListener("load", function () {

//     const email = document.querySelector("#email");

//     // focus => evento para detectar que el usuario situó el cursor en un input del formulario.
//     email.addEventListener("focus", () => {
//         console.log("focus on the email input")
//     })

//     // blur => evento para detectar que el usuario quitó el cursor de un input del formulario.
//     email.addEventListener("blur", () => {
//         console.log("blur on the email input")
//     })

//     //change => evento para detectar cambios en el valor de un input.
//     email.addEventListener("change", () => {
//         console.log("the value input was changed")
//     })

// })

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    let errores = [];
    const inputEmail = document.querySelector("#email");

    if (inputEmail.value == ""){
        errores.push("El campo email está vacio")
    }

    if (errores.length > 0){
        e.preventDefault();
        const divErrores = document.querySelector(".errores");
        errores.forEach(errores => {
            divErrores.innerHTML += `<li> ${errores} </li>`
        })
    }
    errores = [];

})

