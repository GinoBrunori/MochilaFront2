const form = document.querySelector('form');
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");

// Creo array vacio para guardar los checkboxes seleccionados => checked == true
let checkBoxesTrue = [];

//Creo un array vacio para guardar las opciones del select
// let selectTrue; []; => //? no hace falta porque solo se guarda una opcion.

// Creo un obj para guardar todos los datos 👇
let objDatos = {
    nombre: "",
    apellido: "",
    email: "",
    pais: "",
    tareas: "",
    comidasFav: ""
}

//Evento de form para cuando apretamos el boton enviar.
form.addEventListener("submit", (e) => {
    e.preventDefault(); //=> prevenimos que se mande

    // !Nombre
    objDatos.nombre = mayus(nombre.value); 
    // console.log(nombreValue);
    
    //! Apellido
    objDatos.apellido = mayus(apellido.value);

    //! Email
    objDatos.email = mayus(email.value);

    //! RADIO BUTTONS : pais
    // CAPTURAMOS LOS RADIO MEDIANTE EL NAME 👇
    const radios = document.getElementsByName("pais");
    // const radios = document.querySelectorAll("input[name = pais"); => otra forma de hacerlo
    // const radios = document.querySelectorAll("input[name = pais")[0] => accedes al primer input

    // For each para recorrerlos
    radios.forEach(input =>{
        // muestra solo el que está seleccionado = true; 👇
        if (input.checked === true){    
            // objDatos.pais = input.value; => sin normarlizar 👈
            objDatos.pais = mayus(input.value); // => normalizado 👈
            //     console.log(`Pais elegido => ${input.value}
            // value => ${input.checked}`);
        }    
    });

    //! CHECKBOXES
    const checkboxes = document.getElementsByName('tareas');
    checkboxes.forEach(check => {
        if (check.checked == true){
            checkBoxesTrue.push(mayus(check.value)); // agregamos al array los check seleccionados
            objDatos.tareas = checkBoxesTrue; // => normalizado
            
            

            // console.log(`Checkbox => ${check.value}: ${check.checked}`)
            // console.log(`Checkbox => ${check.id}: ${check.checked}`)
            // console.log(checkBoxesTrue); // muestro por consola el array.
            
        }
    });

    //! SELECTS
    const selecOptions = document.querySelector("select#comidas")
    objDatos.comidasFav = mayus(selecOptions.value);

    // objDatos.comidasFav = selecOptions.value; => sin normalizar


    
    /* -------------------------------------------------------------------------- */
    checkBoxesTrue = []; // pongo el array vacio para que no se repitan los check seleccionados.
    
    
    console.table(objDatos);
    form.reset(); // se resetea el form cuando se hace un submit.
});


/* ---------------------------- NORMALIZAR DATOS ---------------------------- */
function mayus (input){
    return input.toUpperCase();
}
