const boton = document.querySelector("button");
boton.addEventListener("click", function(){
    const aleatorio = Math.round(Math.random()*100+1);
    const url = `https://pokeapi.co/api/v2/pokemon/${aleatorio}/`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const divUl = document.querySelector(".datosPoke ul");
        divUl.innerHTML = `
        <p> ${data.name} </p>
        <p> ${data.order} </p>
        <img src="${data.sprites.back_default}">
        <img src="${data.sprites.back_shiny}">
        <img src="${data.sprites.front_default}">
        <img src="${data.sprites.front_shiny}">
        `
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
})

