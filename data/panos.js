/* =========================================================
   BORDADURÍA INTERNACIONAL J&M
   PAÑOS.JS

   Funciones:
   - Selección de tamaño
   - Mostrar colores disponibles
   - Selección de color
   - Cambiar imagen principal
   - Consulta personalizada por WhatsApp

   TAMAÑOS:
   - Pequeño
   - Mediano
   - Grande

   IMPORTANTE:
   Todas las imágenes utilizan formato .webp
========================================================= */

/* =========================================================
   DATOS DE PAÑOS
========================================================= */

const panos = {
  /* =====================================================
       PEQUEÑO
    ===================================================== */

  pequeno: {
    nombre: "Pequeño",

    colores: [
      {
        nombre: "Rojo",
        imagen: "../img/panos/pequeno/rojo.webp",
      },

      {
        nombre: "Azul",
        imagen: "../img/panos/pequeno/azul.webp",
      },

      {
        nombre: "Verde",
        imagen: "../img/panos/pequeno/verde.webp",
      },

      {
        nombre: "Dorado",
        imagen: "../img/panos/pequeno/dorado.webp",
      },
    ],
  },

  /* =====================================================
       MEDIANO
    ===================================================== */

  mediano: {
    nombre: "Mediano",

    colores: [
      {
        nombre: "Rojo",
        imagen: "../img/panos/mediano/rojo.webp",
      },

      {
        nombre: "Azul",
        imagen: "../img/panos/mediano/azul.webp",
      },

      {
        nombre: "Verde",
        imagen: "../img/panos/mediano/verde.webp",
      },

      {
        nombre: "Dorado",
        imagen: "../img/panos/mediano/dorado.webp",
      },
    ],
  },

  /* =====================================================
       GRANDE
    ===================================================== */

  grande: {
    nombre: "Grande",

    colores: [
      {
        nombre: "Rojo",
        imagen: "../img/panos/grande/rojo.webp",
      },

      {
        nombre: "Azul",
        imagen: "../img/panos/grande/azul.webp",
      },

      {
        nombre: "Verde",
        imagen: "../img/panos/grande/verde.webp",
      },

      {
        nombre: "Dorado",
        imagen: "../img/panos/grande/dorado.webp",
      },
    ],
  },
};

/* =========================================================
   ELEMENTOS HTML
========================================================= */

const tamanosPanos = document.querySelector("#tamanos-panos");

const coloresPanos = document.querySelector("#colores-panos");

const imagenPano = document.querySelector("#imagen-pano");

const nombrePano = document.querySelector("#nombre-pano");

const descripcionPano = document.querySelector("#descripcion-pano");

/* =========================================================
   VARIABLES ACTUALES
========================================================= */

let tamanoPanoActual = null;

let colorPanoActual = null;

/* =========================================================
   MOSTRAR TAMAÑOS
========================================================= */

function mostrarTamanosPanos() {
  if (!tamanosPanos) {
    return;
  }

  tamanosPanos.innerHTML = "";

  Object.entries(panos).forEach(([id, tamano]) => {
    const boton = document.createElement("button");

    boton.type = "button";

    boton.className = "medida-button";

    boton.dataset.tamano = id;

    boton.textContent = tamano.nombre;

    boton.addEventListener("click", () => {
      seleccionarTamanoPano(id);
    });

    tamanosPanos.appendChild(boton);
  });
}

/* =========================================================
   SELECCIONAR TAMAÑO
========================================================= */

function seleccionarTamanoPano(idTamano) {
  const tamano = panos[idTamano];

  if (!tamano) {
    return;
  }

  tamanoPanoActual = idTamano;

  /*
       Activar botón seleccionado
    */

  const botones = tamanosPanos.querySelectorAll(".medida-button");

  botones.forEach((boton) => {
    boton.classList.toggle("active", boton.dataset.tamano === idTamano);
  });

  /*
       Actualizar título
    */

  if (nombrePano) {
    nombrePano.textContent = `Paño ${tamano.nombre}`;
  }

  /*
       Actualizar descripción
    */

  if (descripcionPano) {
    descripcionPano.textContent = `Paño disponible en tamaño ${tamano.nombre}.`;
  }

  /*
       Mostrar colores
    */

  mostrarColoresPanos(tamano.colores);
}

/* =========================================================
   MOSTRAR COLORES
========================================================= */

function mostrarColoresPanos(colores) {
  if (!coloresPanos) {
    return;
  }

  coloresPanos.innerHTML = "";

  /*
       Comprobar si existen colores
    */

  if (!colores || colores.length === 0) {
    coloresPanos.innerHTML = `

            <div class="colores-vacio">

                <p>
                    No hay colores disponibles
                    para este tamaño.
                </p>

            </div>

        `;

    return;
  }

  /*
       Crear tarjetas de colores
    */

  colores.forEach((color) => {
    const tarjeta = document.createElement("article");

    tarjeta.className = "color-card";

    tarjeta.innerHTML = `

                <div class="color-card__image">

                    <img
                        src="${color.imagen}"
                        alt="Paño ${tamanoPanoActual} - ${color.nombre}"
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
      seleccionarColorPano(tarjeta, color);
    });

    coloresPanos.appendChild(tarjeta);
  });
}

/* =========================================================
   SELECCIONAR COLOR
========================================================= */

function seleccionarColorPano(tarjeta, color) {
  /*
       Quitar selección anterior
    */

  const tarjetas = coloresPanos.querySelectorAll(".color-card");

  tarjetas.forEach((elemento) => {
    elemento.classList.remove("active");
  });

  /*
       Activar color seleccionado
    */

  tarjeta.classList.add("active");

  colorPanoActual = color;

  /*
       Cambiar imagen principal
    */

  if (imagenPano) {
    imagenPano.src = color.imagen;

    imagenPano.alt = `Paño ${color.nombre}`;
  }
}

/* =========================================================
   CONSULTAR PAÑO POR WHATSAPP
========================================================= */

function consultarPano() {
  /*
       Comprobar que whatsapp.js
       esté cargado.
    */

  if (typeof abrirWhatsApp !== "function") {
    console.warn("whatsapp.js no está cargado.");

    return;
  }

  /*
       Obtener tamaño
    */

  const tamano = tamanoPanoActual ? panos[tamanoPanoActual].nombre : "";

  /*
       Obtener color
    */

  const color = colorPanoActual ? colorPanoActual.nombre : "";

  /*
       Crear mensaje personalizado
    */

  const mensaje = crearMensajeProducto("Paños", tamano, color);

  /*
       Abrir WhatsApp
    */

  abrirWhatsApp(mensaje);
}

/* =========================================================
   BOTÓN WHATSAPP
========================================================= */

const botonWhatsAppPano = document.querySelector("#whatsapp-pano");

if (botonWhatsAppPano) {
  botonWhatsAppPano.addEventListener("click", (event) => {
    event.preventDefault();

    consultarPano();
  });
}

/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /*
           Mostrar Pequeño, Mediano y Grande
        */

  mostrarTamanosPanos();

  /*
           Seleccionar automáticamente
           el primer tamaño
        */

  const primerTamano = Object.keys(panos)[0];

  if (primerTamano) {
    seleccionarTamanoPano(primerTamano);
  }
});
