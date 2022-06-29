const urlAPI = "https://ctd-todo-api.herokuapp.com/v1/users/login";

const payload = {
    email:"luismi@gmail.com",
    password: "friaComoElViento"
}

const configuraciones = {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(payload)
}

fetch(urlAPI,configuraciones)
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.log(error));
