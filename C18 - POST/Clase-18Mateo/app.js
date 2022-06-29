// Posteo un nuevo recurso
const urlPost = 'https://jsonplaceholder.typicode.com/posts';

const payload = {
    title: 'Titulo del comentario',
    body: 'Comentario para subir al servidor.',
    userId: 12,
}

const configuraciones = {
    method: 'POST',
    headers: {
        'Content-Type': "application/json; charset=UTF-8"
    },
    body: JSON.stringify(payload)
}

fetch(urlPost, configuraciones)
.then( respuesta => respuesta.json())
.then( info => console.log(info))

/* ------------------------------------ . ----------------------------------- */
/* -------------------------- PEDIR varios recursos ------------------------- */
// nodos
const btnPedir = document.querySelector('.pedirComentarios p');
const comentariosContenedor = document.querySelector('.comentarios');

function crearComponenteComentario(texto, id) {
    return `<p><span>UserId ${id}</span>: ${texto}</p>`
}


btnPedir.addEventListener('click', (e)=>{
    const urlGet = 'https://jsonplaceholder.typicode.com/posts';
    fetch(urlGet)
    .then( respuesta => respuesta.json())
    .then( listadoComentarios =>{
        // usar los comentarios que me llegaron👇
        listadoComentarios = listadoComentarios.slice(0,10)
        console.log(listadoComentarios);

        // rellenamos el nodo vacío con un mapeo y creacion de componentes👇
        comentariosContenedor.innerHTML = listadoComentarios.map(comentario => crearComponenteComentario(comentario.title, comentario.id)).join('')
    })
})

