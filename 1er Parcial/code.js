/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const nombre = prompt("Ingresa tu nombre");
  const anioNacimiento = parseInt(prompt("Ingresa el año en que naciste"));
  const ciudad = prompt("Ingresa la ciudad en donde vives");
  const teInteresaJS = confirm("Te interesa JS?");

  datosPersona.nombre = nombre;
  datosPersona.edad = 2022 - anioNacimiento;
  datosPersona.ciudad = ciudad;
  
    if (teInteresaJS) {
        datosPersona.interesPorJs = "Si"
    } else {
        datosPersona.interesPorJs = "No"
    }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let spanNombre = document.querySelector("#nombre");
  let spanEdad = document.querySelector("#edad");
  let spanCiudad = document.querySelector("#ciudad");
  let spanJs = document.querySelector("#javascript");

  spanNombre.textContent = datosPersona.nombre;
  spanEdad.textContent = datosPersona.edad;
  spanCiudad.textContent = datosPersona.ciudad;
  spanJs.textContent = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila");
  fila.innerHTML = "";

  listado.forEach(item => { 
    fila.innerHTML += `
    <div class="caja">
      <img src=${item.imgUrl} alt=${item.lenguajes}>
      <p class="lenguajes"> ${item.lenguajes} </p>
      <p class="bimestre"> ${item.bimestre} </p>
    </div>`;
  })
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 const sitio = document.querySelector("#sitio");
 sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener("keypress", (e) => {
  const parrafoSobreMi = document.querySelector("#sobre-mi");

    if (e.key === "F" || e.key === "f") {
      parrafoSobreMi.classList.remove("oculto");
    }
})
