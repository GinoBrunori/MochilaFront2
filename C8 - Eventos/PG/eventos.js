//! load => Este evento permite que todo el script se ejecute cuando se haya cargado por completo el objeto document dentro del objeto window.

// 1era forma de hacerlo, pero no es recomendable ya que si existen 2 window.load se sobreescriben 👇
// window.onload(function() {})

// 2da forma. Esta forma si permite utilizar 2 window.addEventListener ("load", function () {}
window.addEventListener ("load", function () {

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        console.log(this);
        alert("estas apretando el boton");
    });

    const parrafo = document.querySelector("p");
    parrafo.addEventListener("click", () => {
        console.log(this); //todo / this => hace referencia al lugar donde se ejecuta el evento.
    });

    //* .preventDefault() => Nos permite evitar que se ejecute el evento predeterminado —o nativo— del elemento al que se lo estemos aplicando.

    const hipervinculos = document.querySelectorAll("ul li a");
    hipervinculos.forEach (a => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(this)
        });
    });

    const input = document.querySelectorAll("input");
    // input.addEventListener("keydown", (e) => {
    // //    let ar = e;      
    // //    console.log(ar);

    // })

    input.forEach(i => {
        i.addEventListener("click", () => {
            i.style.backgroundColor = prompt("que color deseas?")
        })
    });

    window.addEventListener("keydown", (e) => {
        let ar = [e.key]
        console.log(`Apretaste la letra ${ar}`)
    })
    
})

window.addEventListener("load", () => {
    const img = document.querySelector("img");
    img.addEventListener("click", () => {
        alert("hola")
    })


})