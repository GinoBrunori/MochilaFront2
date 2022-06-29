console.log("Banco mobile");

const nodoContainer = document.querySelector('.bancaMobile');
const boton = document.querySelector('button');


boton.addEventListener('click', function () {
    const promesa = new Promise((resolve, reject) => {
        // simulo info almacenada en la DB de un servidor
        let usuario = {
            estadoCuenta: "activa",
            nombre: "Michael Scott",
            fondos: 0
        }

        setTimeout(function () {

            if (usuario.fondos > 0) {
                // sucede todo bien
                resolve({
                    mensaje: "Consulta realizada con éxito.",
                    estatus: 200,
                    cuenta: usuario
                })
            } else {
                // sucede con error
                reject({
                    mensaje: "Fondos insuficientes",
                    estatus: 400,
                    cuenta: usuario
                })
            }
        }, 2500)

    })

    // esperamos la respuesta
    promesa
        .then(respuesta => {
            console.log("Salió BIEN");
            console.log(respuesta);
            nodoContainer.innerHTML = `<h5>${respuesta.mensaje}</h5>`;
            nodoContainer.innerHTML += `<hr>`;
            nodoContainer.innerHTML += `<p>NOMBRE: ${respuesta.cuenta.nombre}</p>`;
            nodoContainer.innerHTML += `<p>SALDO: ${respuesta.cuenta.fondos}</p>`;
            nodoContainer.style.border = "5px solid green";
        }).catch(rechazo => {
            console.log("Salió CON ERROR");
            console.log(rechazo);
            nodoContainer.innerHTML = `<h5>${rechazo.mensaje}</h5>`;
            nodoContainer.innerHTML += `<hr>`;
            nodoContainer.innerHTML += `<p>NOMBRE: ${rechazo.cuenta.nombre}</p>`;
            nodoContainer.innerHTML += `<p>SALDO: ${rechazo.cuenta.fondos}</p>`;
            nodoContainer.style.border = "5px solid red";
        })
})


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));