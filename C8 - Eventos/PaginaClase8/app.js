const main = document.querySelector("main");
const h1 = document.querySelector("#logo");

//Estilos
h1.classList.add("logo");


for(let i = 0; i < noticias.length; i++) {

    //Crear nodos
    const creandoDiv = document.createElement("div");
    const creandoH2 = document.createElement("h2");
    const creandoImg = document.createElement("img");
    const creandoP = document.createElement("p");
    const creandoFecha = document.createElement("span");
    
    // Crear contenido
    const contH2 = document.createTextNode(noticias[i].titulo);
    const contP = document.createTextNode(noticias[i].descripcion);
    const contFecha = document.createTextNode(noticias[i].fecha);

    // Colocamos contenido en los elementos
    creandoH2.appendChild(contH2);
    creandoP.appendChild(contP);
    creandoFecha.appendChild(contFecha);
    creandoImg.setAttribute("src", noticias[i].imgUrl);
    
    // Formamos elementos con contenido
    main.appendChild(creandoDiv);    
    creandoDiv.appendChild(creandoH2);
    creandoDiv.appendChild(creandoImg);
    creandoDiv.appendChild(creandoP);
    creandoDiv.appendChild(creandoFecha);

    // Estilos
    creandoDiv.classList.add("div");
    creandoImg.classList.add("img")
    creandoImg.classList.add("p")
    creandoImg.classList.add("h2")
   
    // Estilo noticia extranjera
    if(noticias[i].tipoNacional === false) {
    creandoDiv.classList.add("div-extranjero")
    }
    
}

