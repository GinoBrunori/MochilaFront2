let formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event) {
event.preventDefault()
const inputs = document.getElementsByName("pais");

inputs.forEach(function(elemento) {
    if (elemento.checked) {
        console.log(`Pais Seleccionado: ${elemento.value}` );
        // console.log(`Seleccionado ${elemento.checked}`)
    }
})

const checkboxes = document.getElementsByName("comidas");
checkboxes.forEach(elemento => {
    if (elemento.checked) {
        console.log(`Pais Seleccionado: ${elemento.value}` );
    }
})

})

