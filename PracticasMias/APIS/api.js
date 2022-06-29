const url = "https://jsonplaceholder.typicode.com";
const divFotos = document.querySelector(".fotos");
fetch(`${url}/photos`)
.then(response => response.json())
.then(data => {
    for(let i = 0; i < 2; i++){
        divFotos.innerHTML += `
        <li> ${data.userId[i]} </li>
        `
    }
})

