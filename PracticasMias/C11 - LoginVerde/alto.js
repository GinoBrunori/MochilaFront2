const listado = [
    'Email no válido o incorrecto.',
    'Contraseña no válida o incorrecta.',
    'Es necesario aceptar los términos y condiciones.',
    'Este es nuevo.'
]

const errores = document.querySelector('.errores');
// console.log(errores)

const listadoModificado = [];

// listado.forEach((item,index) => {
    //     console.log(`Vuelta numero: ${index}`);
    //     console.log(listadoModificado)
    //     listadoModificado.push(item)
    // });
    
    // listado.forEach(item => {
        //     listadoModificado.push(item.toUpperCase())
        // })
        // console.log(listadoModificado);
        
        // console.log(listadoModificado)
        
//! -------------------------------------------------------------------------- //
//! Forma1 de agregar listado[] + etiquetas <HTML> a un array.
// const listadoHTML1 = []
// listado.forEach(item => {
//     listadoHTML1.push(`<p><small> ${item} </small></p>`)
// })

//! Forma2: Agregar  listado[] + etiquetas <HTML> con .map() a un nuevo array .
// const listadoHTML = listado.map(item => {
//     return (`<p><small> ${item} </small></p>`)        
// });
// console.log(listadoHTML)

//Todo/  Como agregar los errores(listadoHTML) a div.errores para ser renderizados en pantalla?
//TODO/  FORMA 1
// listadoHTML.forEach(item => {
//     errores.innerHTML += item;
// })

//TODO/ FORMA 2 👇: de esta forma se renderizan también las comas del array. Por eso se debe hacer un .join('')  
// errores.innerHTML = listadoHTML.join('');


//* Forma ultraOptimizada 👇
errores.innerHTML = listado.map(item => `<p><small> ${item} </small></p>`).join('')


