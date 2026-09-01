/* =========================================================
   BORDADURÍA INTERNACIONAL J&M
   BANDOS.JS

   Funciones:
   - Selección de modelos de bandos
   - Selección de medidas
   - Mostrar colores disponibles
   - Cambiar imagen según el color
   - Preparar consulta por WhatsApp

   IMPORTANTE:
   Todas las imágenes utilizan formato .webp
========================================================= */

/* =========================================================
   DATOS DE BANDOS
========================================================= */

const bandos = {
  "modelo-1": {
    nombre: "Modelo Simple",

    medidas: {
      "medida-1": {
        nombre: "Medida 1",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../img/bandos/modelo-1/medida-1/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../img/bandos/modelo-1/medida-1/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../img/bandos/modelo-1/medida-1/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../img/bandos/modelo-1/medida-1/dorado.webp",
          },
        ],
      },

      "medida-2": {
        nombre: "Medida 2",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../img/bandos/modelo-1/medida-2/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../img/bandos/modelo-1/medida-2/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../img/bandos/modelo-1/medida-2/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../img/bandos/modelo-1/medida-2/dorado.webp",
          },
        ],
      },
    },
  },

  /* =====================================================
       MODELO 2
    ===================================================== */

  "modelo-2": {
    nombre: "Modelo Paloma",

    medidas: {
      "medida-1": {
        nombre: "Medida 1",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../img/bandos/modelo-2/medida-1/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../img/bandos/modelo-2/medida-1/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../img/bandos/modelo-2/medida-1/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../img/bandos/modelo-2/medida-1/dorado.webp",
          },
        ],
      },

      "medida-2": {
        nombre: "Medida 2",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../img/bandos/modelo-2/medida-2/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../img/bandos/modelo-2/medida-2/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../img/bandos/modelo-2/medida-2/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../img/bandos/modelo-2/medida-2/dorado.webp",
          },
        ],
      },
    },
  },
};

/* =========================================================
   ELEMENTOS HTML
========================================================= */

const modelosBandos = document.querySelector("#modelos-bandos");

const medidasBandos = document.querySelector("#medidas-bandos");

const coloresBandos = document.querySelector("#colores-bandos");

const imagenBando = document.querySelector("#imagen-bando");

const nombreBando = document.querySelector("#nombre-bando");

const descripcionBando = document.querySelector("#descripcion-bando");

/* =========================================================
   VARIABLES ACTUALES
========================================================= */

let modeloBandoActual = null;

let medidaBandoActual = null;

let colorBandoActual = null;

/* =========================================================
   MOSTRAR MODELOS
========================================================= */

function mostrarModelosBandos() {
  if (!modelosBandos) {
    return;
  }

  modelosBandos.innerHTML = "";

  Object.entries(bandos).forEach(([id, modelo]) => {
    const boton = document.createElement("button");

    boton.type = "button";

    boton.className = "modelo-button";

    boton.dataset.modelo = id;

    boton.textContent = modelo.nombre;

    boton.addEventListener("click", () => {
      seleccionarModeloBando(id);
    });

    modelosBandos.appendChild(boton);
  });
}

/* =========================================================
   SELECCIONAR MODELO
========================================================= */

function seleccionarModeloBando(idModelo) {
  const modelo = bandos[idModelo];

  if (!modelo) {
    return;
  }

  modeloBandoActual = idModelo;

  /*
       Quitar selección anterior
    */

  const botones = modelosBandos.querySelectorAll(".modelo-button");

  botones.forEach((boton) => {
    boton.classList.toggle("active", boton.dataset.modelo === idModelo);
  });

  /*
       Actualizar título
    */

  if (nombreBando) {
    nombreBando.textContent = `Bando ${modelo.nombre}`;
  }

  /*
       Crear medidas
    */

  mostrarMedidasBandos(modelo.medidas);

  /*
       Seleccionar automáticamente
       la primera medida
    */

  const primeraMedida = Object.keys(modelo.medidas)[0];

  if (primeraMedida) {
    seleccionarMedidaBando(primeraMedida);
  }
}

/* =========================================================
   MOSTRAR MEDIDAS
========================================================= */

function mostrarMedidasBandos(medidas) {
  if (!medidasBandos) {
    return;
  }

  medidasBandos.innerHTML = "";

  Object.entries(medidas).forEach(([id, medida]) => {
    const boton = document.createElement("button");

    boton.type = "button";

    boton.className = "medida-button";

    boton.dataset.medida = id;

    boton.textContent = medida.nombre;

    boton.addEventListener("click", () => {
      seleccionarMedidaBando(id);
    });

    medidasBandos.appendChild(boton);
  });
}

/* =========================================================
   SELECCIONAR MEDIDA
========================================================= */

function seleccionarMedidaBando(idMedida) {
  if (!modeloBandoActual) {
    return;
  }

  const modelo = bandos[modeloBandoActual];

  const medida = modelo.medidas[idMedida];

  if (!medida) {
    return;
  }

  medidaBandoActual = idMedida;

  /*
       Activar botón
    */

  const botones = medidasBandos.querySelectorAll(".medida-button");

  botones.forEach((boton) => {
    boton.classList.toggle("active", boton.dataset.medida === idMedida);
  });

  /*
       Mostrar colores
    */

  mostrarColoresBandos(medida.colores);

  /*
       Actualizar descripción
    */

  if (descripcionBando) {
    descripcionBando.textContent = `${modelo.nombre} - ${medida.nombre}`;
  }
}

/* =========================================================
   MOSTRAR COLORES
========================================================= */

function mostrarColoresBandos(colores) {
  if (!coloresBandos) {
    return;
  }

  coloresBandos.innerHTML = "";

  if (!colores || colores.length === 0) {
    coloresBandos.innerHTML = `
            <div class="colores-vacio">
                <p>
                    No hay colores disponibles
                    para esta medida.
                </p>
            </div>
        `;

    return;
  }

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

    tarjeta.addEventListener("click", () => {
      seleccionarColorBando(tarjeta, color);
    });

    coloresBandos.appendChild(tarjeta);
  });
}

/* =========================================================
   SELECCIONAR COLOR
========================================================= */

function seleccionarColorBando(tarjeta, color) {
  /*
       Quitar color anterior
    */

  const tarjetas = coloresBandos.querySelectorAll(".color-card");

  tarjetas.forEach((elemento) => {
    elemento.classList.remove("active");
  });

  /*
       Activar color
    */

  tarjeta.classList.add("active");

  colorBandoActual = color;

  /*
       Cambiar imagen principal
    */

  if (imagenBando) {
    imagenBando.src = color.imagen;

    imagenBando.alt = `Bando ${color.nombre}`;
  }
}

/* =========================================================
   CONSULTAR BANDOS POR WHATSAPP
========================================================= */

function consultarBando() {
  if (typeof abrirWhatsApp !== "function") {
    console.warn("whatsapp.js no está cargado.");

    return;
  }

  const modelo = modeloBandoActual ? bandos[modeloBandoActual].nombre : "";

  const medida = medidaBandoActual
    ? bandos[modeloBandoActual].medidas[medidaBandoActual].nombre
    : "";

  const color = colorBandoActual ? colorBandoActual.nombre : "";

  const mensaje = crearMensajeProducto(
    "Bandos",
    `${modelo} - ${medida}`,
    color,
  );

  abrirWhatsApp(mensaje);
}

/* =========================================================
   BOTÓN WHATSAPP
========================================================= */

const botonWhatsAppBando = document.querySelector("#whatsapp-bando");

if (botonWhatsAppBando) {
  botonWhatsAppBando.addEventListener("click", (event) => {
    event.preventDefault();

    consultarBando();
  });
}

/* =========================================================
   INICIALIZAR
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  mostrarModelosBandos();

  /*
           Seleccionar automáticamente
           el primer modelo.
        */

  const primerModelo = Object.keys(bandos)[0];

  if (primerModelo) {
    seleccionarModeloBando(primerModelo);
  }
});
