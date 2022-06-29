// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
const btnContainer = document.querySelector(".btnContainer #random");
btnContainer.addEventListener("click", function(){
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
        console.log(data);
        renderizarDatosUsuario(data);
    })
    .catch(error => console.log(error));

    function renderizarDatosUsuario(datos) {
        /* -------------------------------- CONSIGNA 1 -------------------------------- */
        // Aquí deben desarrollar una función que muestre en pantalla:
        // la foto, el nombre completo del usuario y su email.
        // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
        //Capturamos el nodo
        const divTarjeta = document.querySelector(".tarjeta");

        //Renderizamos 
        divTarjeta.innerHTML = `
        <ul>
        <img src=${datos.results[0].picture.large}
        <br>
        <li> Nombre: ${datos.results[0].name.title} ${datos.results[0].name.first} </li>
        <li> Apellido: ${datos.results[0].name.last} </li>
        <li> Email: ${datos.results[0].email} </li>
        `
}

})




/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.
