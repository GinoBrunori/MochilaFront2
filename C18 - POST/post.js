let data = {
    nombre: "Gino",
    apellido: "Smith",
    edad: 22 
}

let settings = {
    "method": "POST",
    "headers": {
        "content-type": "application/json"
    },
    "body": JSON.stringify(data)
}
 
// POST: fetch ahora necesita 2 parametros. la url de la api y las settings
fetch(api, settings)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error)); 