/* =========================================================
   BORDADURÍA INTERNACIONAL J&M
   OTROS.JS

   Funciones:
   - Selección de Otros 1 / Otros 2
   - Mostrar colores disponibles
   - Selección de color
   - Cambiar imagen principal
   - Consulta personalizada por WhatsApp

   IMPORTANTE:
   Todas las imágenes utilizan formato .webp
========================================================= */

/* =========================================================
   DATOS DE OTROS
========================================================= */

const otros = {
  /* =====================================================
       OTROS 1
    ===================================================== */

  "otros-1": {
    nombre: "Otros 1",

    colores: [
      {
        nombre: "Rojo",
        imagen: "../img/otros/otros-1/rojo.webp",
      },

      {
        nombre: "Azul",
        imagen: "../img/otros/otros-1/azul.webp",
      },

      {
        nombre: "Verde",
        imagen: "../img/otros/otros-1/verde.webp",
      },

      {
        nombre: "Dorado",
        imagen: "../img/otros/otros-1/dorado.webp",
      },
    ],
  },

  /* =====================================================
       OTROS 2
    ===================================================== */

  "otros-2": {
    nombre: "Otros 2",

    colores: [
      {
        nombre: "Rojo",
        imagen: "../img/otros/otros-2/rojo.webp",
      },

      {
        nombre: "Azul",
        imagen: "../img/otros/otros-2/azul.webp",
      },

      {
        nombre: "Verde",
        imagen: "../img/otros/otros-2/verde.webp",
      },

      {
        nombre: "Dorado",
        imagen: "../img/otros/otros-2/dorado.webp",
      },
    ],
  },
};

/* =========================================================
   ELEMENTOS HTML
========================================================= */

const modelosOtros = document.querySelector("#modelos-otros");

const coloresOtros = document.querySelector("#colores-otros");

const imagenOtro = document.querySelector("#imagen-otro");

const nombreOtro = document.querySelector("#nombre-otro");

const descripcionOtro = document.querySelector("#descripcion-otro");

/* =========================================================
   VARIABLES ACTUALES
========================================================= */

let otroActual = null;

let colorOtroActual = null;

/* =========================================================
   MOSTRAR OTROS
========================================================= */

function mostrarModelosOtros() {
  if (!modelosOtros) {
    return;
  }

  modelosOtros.innerHTML = "";

  Object.entries(otros).forEach(([id, producto]) => {
    const boton = document.createElement("button");

    boton.type = "button";

    boton.className = "modelo-button";

    boton.dataset.otro = id;

    boton.textContent = producto.nombre;

    boton.addEventListener("click", () => {
      seleccionarOtro(id);
    });

    modelosOtros.appendChild(boton);
  });
}

/* =========================================================
   SELECCIONAR OTRO
========================================================= */

function seleccionarOtro(idOtro) {
  const producto = otros[idOtro];

  if (!producto) {
    return;
  }

  otroActual = idOtro;

  /*
       Activar botón seleccionado
    */

  const botones = modelosOtros.querySelectorAll(".modelo-button");

  botones.forEach((boton) => {
    boton.classList.toggle("active", boton.dataset.otro === idOtro);
  });

  /*
       Actualizar título
    */

  if (nombreOtro) {
    nombreOtro.textContent = producto.nombre;
  }

  /*
       Actualizar descripción
    */

  if (descripcionOtro) {
    descripcionOtro.textContent = `${producto.nombre} - Colores disponibles`;
  }

  /*
       Mostrar colores
    */

  mostrarColoresOtros(producto.colores);
}

/* =========================================================
   MOSTRAR COLORES
========================================================= */

function mostrarColoresOtros(colores) {
  if (!coloresOtros) {
    return;
  }

  coloresOtros.innerHTML = "";

  /*
       Si no existen colores
    */

  if (!colores || colores.length === 0) {
    coloresOtros.innerHTML = `

            <div class="colores-vacio">

                <p>
                    No hay colores disponibles
                    para este producto.
                </p>

            </div>

        `;

    return;
  }

  /*
       Crear tarjetas
    */

  colores.forEach((color) => {
    const tarjeta = document.createElement("article");

    tarjeta.className = "color-card";

    tarjeta.innerHTML = `

                <div class="color-card__image">

                    <img
                        src="${color.imagen}"
                        alt="${otros[otroActual].nombre} - ${color.nombre}"
                        loading="lazy"
                    >

                </div>

                <span class="color-card__name">
                    ${color.nombre}
                </span>

            `;

    /*
               Seleccionar color
            */

    tarjeta.addEventListener("click", () => {
      seleccionarColorOtro(tarjeta, color);
    });

    coloresOtros.appendChild(tarjeta);
  });
}

/* =========================================================
   SELECCIONAR COLOR
========================================================= */

function seleccionarColorOtro(tarjeta, color) {
  /*
       Quitar selección anterior
    */

  const tarjetas = coloresOtros.querySelectorAll(".color-card");

  tarjetas.forEach((elemento) => {
    elemento.classList.remove("active");
  });

  /*
       Activar color
    */

  tarjeta.classList.add("active");

  colorOtroActual = color;

  /*
       Cambiar imagen principal
    */

  if (imagenOtro) {
    imagenOtro.src = color.imagen;

    imagenOtro.alt = `${otros[otroActual].nombre} - ${color.nombre}`;
  }
}

/* =========================================================
   CONSULTAR POR WHATSAPP
========================================================= */

function consultarOtro() {
  /*
       Comprobar que whatsapp.js
       esté cargado
    */

  if (typeof abrirWhatsApp !== "function") {
    console.warn("whatsapp.js no está cargado.");

    return;
  }

  /*
       Obtener producto
    */

  const producto = otroActual ? otros[otroActual].nombre : "";

  /*
       Obtener color
    */

  const color = colorOtroActual ? colorOtroActual.nombre : "";

  /*
       Crear mensaje
    */

  const mensaje = crearMensajeProducto(producto, "", color);

  /*
       Abrir WhatsApp
    */

  abrirWhatsApp(mensaje);
}

/* =========================================================
   BOTÓN WHATSAPP
========================================================= */

const botonWhatsAppOtro = document.querySelector("#whatsapp-otro");

if (botonWhatsAppOtro) {
  botonWhatsAppOtro.addEventListener("click", (event) => {
    event.preventDefault();

    consultarOtro();
  });
}

/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /*
           Mostrar Otros 1 y Otros 2
        */

  mostrarModelosOtros();

  /*
           Seleccionar automáticamente
           Otros 1
        */

  const primerOtro = Object.keys(otros)[0];

  if (primerOtro) {
    seleccionarOtro(primerOtro);
  }
});
