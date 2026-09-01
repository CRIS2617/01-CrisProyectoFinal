/* =========================================================
   BORDADURÍA INTERNACIONAL J&M
   GUIONES.JS

   Funciones:
   - Selección de modelos de guiones
   - Selección de medidas
   - Mostrar colores disponibles
   - Cambiar imagen según el color
   - Consulta personalizada por WhatsApp

   IMPORTANTE:
   Todas las imágenes utilizan formato .webp
========================================================= */

/* =========================================================
   DATOS DE GUIONES
========================================================= */

const guiones = {
  /* =====================================================
       MODELO 1
    ===================================================== */

  "modelo-1": {
    nombre: "Modelo 1",

    medidas: {
      "medida-1": {
        nombre: "1 metro",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../img/guiones/modelo-1/medida-1/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../img/guiones/modelo-1/medida-1/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../img/guiones/modelo-1/medida-1/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../img/guiones/modelo-1/medida-1/dorado.webp",
          },
        ],
      },

      "medida-2": {
        nombre: "1.1 metros",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../img/guiones/modelo-1/medida-2/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../img/guiones/modelo-1/medida-2/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../img/guiones/modelo-1/medida-2/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../img/guiones/modelo-1/medida-2/dorado.webp",
          },
        ],
      },
    },
  },

  /* =====================================================
       MODELO 2
    ===================================================== */

  "modelo-2": {
    nombre: "Modelo 2",

    medidas: {
      "medida-1": {
        nombre: "1 metro",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../img/guiones/modelo-2/medida-1/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../img/guiones/modelo-2/medida-1/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../img/guiones/modelo-2/medida-1/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../img/guiones/modelo-2/medida-1/dorado.webp",
          },
        ],
      },

      "medida-2": {
        nombre: "1.1 metros",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../img/guiones/modelo-2/medida-2/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../img/guiones/modelo-2/medida-2/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../img/guiones/modelo-2/medida-2/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../img/guiones/modelo-2/medida-2/dorado.webp",
          },
        ],
      },
    },
  },
};

/* =========================================================
   ELEMENTOS HTML
========================================================= */

const modelosGuiones = document.querySelector("#modelos-guiones");

const medidasGuiones = document.querySelector("#medidas-guiones");

const coloresGuiones = document.querySelector("#colores-guiones");

const imagenGuion = document.querySelector("#imagen-guion");

const nombreGuion = document.querySelector("#nombre-guion");

const descripcionGuion = document.querySelector("#descripcion-guion");

/* =========================================================
   VARIABLES ACTUALES
========================================================= */

let modeloGuionActual = null;

let medidaGuionActual = null;

let colorGuionActual = null;

/* =========================================================
   MOSTRAR MODELOS
========================================================= */

function mostrarModelosGuiones() {
  if (!modelosGuiones) {
    return;
  }

  modelosGuiones.innerHTML = "";

  Object.entries(guiones).forEach(([id, modelo]) => {
    const boton = document.createElement("button");

    boton.type = "button";

    boton.className = "modelo-button";

    boton.dataset.modelo = id;

    boton.textContent = modelo.nombre;

    boton.addEventListener("click", () => {
      seleccionarModeloGuion(id);
    });

    modelosGuiones.appendChild(boton);
  });
}

/* =========================================================
   SELECCIONAR MODELO
========================================================= */

function seleccionarModeloGuion(idModelo) {
  const modelo = guiones[idModelo];

  if (!modelo) {
    return;
  }

  modeloGuionActual = idModelo;

  /*
       Activar botón seleccionado
    */

  const botones = modelosGuiones.querySelectorAll(".modelo-button");

  botones.forEach((boton) => {
    boton.classList.toggle("active", boton.dataset.modelo === idModelo);
  });

  /*
       Actualizar título
    */

  if (nombreGuion) {
    nombreGuion.textContent = `Guion ${modelo.nombre}`;
  }

  /*
       Mostrar las medidas
    */

  mostrarMedidasGuiones(modelo.medidas);

  /*
       Seleccionar automáticamente
       la primera medida
    */

  const primeraMedida = Object.keys(modelo.medidas)[0];

  if (primeraMedida) {
    seleccionarMedidaGuion(primeraMedida);
  }
}

/* =========================================================
   MOSTRAR MEDIDAS
========================================================= */

function mostrarMedidasGuiones(medidas) {
  if (!medidasGuiones) {
    return;
  }

  medidasGuiones.innerHTML = "";

  Object.entries(medidas).forEach(([id, medida]) => {
    const boton = document.createElement("button");

    boton.type = "button";

    boton.className = "medida-button";

    boton.dataset.medida = id;

    boton.textContent = medida.nombre;

    boton.addEventListener("click", () => {
      seleccionarMedidaGuion(id);
    });

    medidasGuiones.appendChild(boton);
  });
}

/* =========================================================
   SELECCIONAR MEDIDA
========================================================= */

function seleccionarMedidaGuion(idMedida) {
  if (!modeloGuionActual) {
    return;
  }

  const modelo = guiones[modeloGuionActual];

  const medida = modelo.medidas[idMedida];

  if (!medida) {
    return;
  }

  medidaGuionActual = idMedida;

  /*
       Activar medida seleccionada
    */

  const botones = medidasGuiones.querySelectorAll(".medida-button");

  botones.forEach((boton) => {
    boton.classList.toggle("active", boton.dataset.medida === idMedida);
  });

  /*
       Mostrar colores disponibles
    */

  mostrarColoresGuiones(medida.colores);

  /*
       Actualizar descripción
    */

  if (descripcionGuion) {
    descripcionGuion.textContent = `${modelo.nombre} - ${medida.nombre}`;
  }
}

/* =========================================================
   MOSTRAR COLORES
========================================================= */

function mostrarColoresGuiones(colores) {
  if (!coloresGuiones) {
    return;
  }

  coloresGuiones.innerHTML = "";

  /*
       Sin colores disponibles
    */

  if (!colores || colores.length === 0) {
    coloresGuiones.innerHTML = `

            <div class="colores-vacio">

                <p>
                    No hay colores disponibles
                    para esta medida.
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
                        alt="${color.nombre}"
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
      seleccionarColorGuion(tarjeta, color);
    });

    coloresGuiones.appendChild(tarjeta);
  });
}

/* =========================================================
   SELECCIONAR COLOR
========================================================= */

function seleccionarColorGuion(tarjeta, color) {
  /*
       Quitar selección anterior
    */

  const tarjetas = coloresGuiones.querySelectorAll(".color-card");

  tarjetas.forEach((elemento) => {
    elemento.classList.remove("active");
  });

  /*
       Activar color seleccionado
    */

  tarjeta.classList.add("active");

  colorGuionActual = color;

  /*
       Cambiar imagen principal
    */

  if (imagenGuion) {
    imagenGuion.src = color.imagen;

    imagenGuion.alt = `Guion ${color.nombre}`;
  }
}

/* =========================================================
   CONSULTAR GUION POR WHATSAPP
========================================================= */

function consultarGuion() {
  /*
       Comprobar que whatsapp.js
       esté disponible.
    */

  if (typeof abrirWhatsApp !== "function") {
    console.warn("whatsapp.js no está cargado.");

    return;
  }

  const modelo = modeloGuionActual ? guiones[modeloGuionActual].nombre : "";

  const medida = medidaGuionActual
    ? guiones[modeloGuionActual].medidas[medidaGuionActual].nombre
    : "";

  const color = colorGuionActual ? colorGuionActual.nombre : "";

  /*
       Crear mensaje personalizado
    */

  const mensaje = crearMensajeProducto(
    "Guiones",
    `${modelo} - ${medida}`,
    color,
  );

  abrirWhatsApp(mensaje);
}

/* =========================================================
   BOTÓN WHATSAPP
========================================================= */

const botonWhatsAppGuion = document.querySelector("#whatsapp-guion");

if (botonWhatsAppGuion) {
  botonWhatsAppGuion.addEventListener("click", (event) => {
    event.preventDefault();

    consultarGuion();
  });
}

/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /*
           Mostrar modelos
        */

  mostrarModelosGuiones();

  /*
           Seleccionar automáticamente
           el primer modelo
        */

  const primerModelo = Object.keys(guiones)[0];

  if (primerModelo) {
    seleccionarModeloGuion(primerModelo);
  }
});
