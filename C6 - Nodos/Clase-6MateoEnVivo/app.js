const clase = {
    portadaUrl: './logo-js.png',
    numero: '6',
    temas: [
        "nodos",
        "createElement()",
        "createTextNode()",
        "appendChild()",
        "atributos dinámicos",
        "hasAttribute()",
        "getAttribute()",
        "removeAttribute()",
        "setAttribute()"
    ],
    nombre: 'Trabajando con nodos'
}


// relleno la imagen
const nodoImagen = document.querySelector('.card img');
nodoImagen.setAttribute('src', clase.portadaUrl);

// rellenamos el span
const nodoNumeroClase = document.querySelector('#numero');
const numClase = document.createTextNode(clase.numero);
nodoNumeroClase.appendChild(numClase);

// rellenamos el parrafo
const nodoNombreClase = document.querySelector('#nombre');
const nombreClase = document.createTextNode(clase.nombre);
nodoNombreClase.appendChild(nombreClase);

// relleno el listado
const nodoListaTemas = document.querySelector('#listaTemas');
/*
for(let i=0; i< clase.temas.length; i++){
    // creamos el nodo
    const item = document.createElement('li');
    // seteamos el texto
    const texto = document.createTextNode(clase.temas[i]);
    // incrustamos el texto en el nodo
    item.appendChild(texto);
    // agregamos al listado un nodo
    nodoListaTemas.appendChild(item);

}
*/
// 👇simplificamos lo mismo que con el for ☝
clase.temas.forEach( tema => {
    nodoListaTemas.innerHTML += `
        <li>${tema}</li>
    `
});
