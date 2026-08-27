/* =========================================================
   BORDADURÍA INTERNACIONAL J&M
   CATALOGO.JS

   Funciones:
   - Abrir detalle del producto
   - Cerrar detalle
   - Seleccionar modelo / tamaño
   - Mostrar información del producto
   - Mostrar colores disponibles
   - Actualizar imagen principal
   - Preparar consulta por WhatsApp
========================================================= */

/* =========================================================
   DATOS DEL CATÁLOGO
========================================================= */

/*
   Aquí posteriormente podremos colocar todos los modelos
   y colores reales de la bordaduría.

   Por ahora se utilizan ejemplos para que el sistema
   pueda funcionar y luego solamente reemplazamos los datos.
*/

const catalogo = {
  /* =====================================================
       BANDOS
    ===================================================== */

  bandos: {
    nombre: "Bandos",

    categoria: "BANDOS",

    descripcion:
      "Bandos bordados disponibles en diferentes modelos, medidas y colores.",

    modelos: {
      "modelo-1": {
        nombre: "Modelo 1",

        imagen: "../assets/img/bandos/modelo-01/bandoModelo1.jpeg",

        descripcion: "Bando bordado del modelo 1.",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../assets/img/bandos/modelo-1/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../assets/img/bandos/modelo-1/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../assets/img/bandos/modelo-1/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../assets/img/bandos/modelo-1/dorado.webp",
          },
        ],
      },
    },
  },

  /* =====================================================
       GUIONES
    ===================================================== */

  guiones: {
    nombre: "Guiones",

    categoria: "GUIONES",

    descripcion:
      "Guiones bordados elaborados con diferentes diseños y colores.",

    modelos: {
      "modelo-1": {
        nombre: "Modelo 1",

        imagen: "../assets/img/guiones/modelo-01/guionModelo1.jpeg",

        descripcion: "Guion bordado del modelo 1.",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../assets/img/guiones/modelo-1/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../assets/img/guiones/modelo-1/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../assets/img/guiones/modelo-1/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../assets/img/guiones/modelo-1/dorado.webp",
          },
        ],
      },
    },
  },

  /* =====================================================
       MANTOS
    ===================================================== */

  mantos: {
    nombre: "Mantos",

    categoria: "MANTOS",

    descripcion:
      "Mantos bordados disponibles en tamaños pequeño, mediano y grande.",

    modelos: {
      pequeno: {
        nombre: "Pequeño",

        imagen: "../assets/img/mantos/pequeño/mantoPequeño.jpeg",

        descripcion: "Manto bordado en tamaño pequeño.",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../assets/img/mantos/pequeno/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../assets/img/mantos/pequeno/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../assets/img/mantos/pequeno/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../assets/img/mantos/pequeno/dorado.webp",
          },
        ],
      },

      mediano: {
        nombre: "Mediano",

        imagen: "../assets/img/mantos/mediano/mantoMediano.jpeg",

        descripcion: "Manto bordado en tamaño mediano.",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../assets/img/mantos/mediano/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../assets/img/mantos/mediano/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../assets/img/mantos/mediano/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../assets/img/mantos/mediano/dorado.webp",
          },
        ],
      },

      grande: {
        nombre: "Grande",

        imagen: "../assets/img/mantos/grande/mantoGrande.jpeg",

        descripcion: "Manto bordado en tamaño grande.",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../assets/img/mantos/grande/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../assets/img/mantos/grande/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../assets/img/mantos/grande/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../assets/img/mantos/grande/dorado.webp",
          },
        ],
      },
    },
  },

  /* =====================================================
       PAÑOS
    ===================================================== */

  panos: {
    nombre: "Paños",

    categoria: "PAÑOS",

    descripcion:
      "Paños bordados disponibles en tamaños pequeño, mediano y grande.",

    modelos: {
      pequeno: {
        nombre: "Pequeño",

        imagen: "../assets/img/panos/pequeño/panoPequeño.jpeg",

        descripcion: "Paño bordado en tamaño pequeño.",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../assets/img/panos/pequeno/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../assets/img/panos/pequeno/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../assets/img/panos/pequeno/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../assets/img/panos/pequeno/dorado.webp",
          },
        ],
      },

      mediano: {
        nombre: "Mediano",

        imagen: "../assets/img/panos/mediano/panoMediano.jpeg",

        descripcion: "Paño bordado en tamaño mediano.",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../assets/img/panos/mediano/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../assets/img/panos/mediano/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../assets/img/panos/mediano/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../assets/img/panos/mediano/dorado.webp",
          },
        ],
      },

      grande: {
        nombre: "Grande",

        imagen: "../assets/img/panos/grande/panoGrande.jpeg",

        descripcion: "Paño bordado en tamaño grande.",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../assets/img/panos/grande/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../assets/img/panos/grande/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../assets/img/panos/grande/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../assets/img/panos/grande/dorado.webp",
          },
        ],
      },
    },
  },

  /* =====================================================
       OTROS
    ===================================================== */

  otros: {
    nombre: "Otros",

    categoria: "OTROS",

    descripcion: "Otros productos bordados disponibles en diferentes colores.",

    modelos: {
      "otros-1": {
        nombre: "Otros 1",

        imagen: "../assets/img/otros/otros-1/gallardete.jpeg",

        descripcion: "Producto bordado correspondiente a Otros 1.",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../assets/img/otros/otros-1/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../assets/img/otros/otros-1/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../assets/img/otros/otros-1/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../assets/img/otros/otros-1/dorado.webp",
          },
        ],
      },

      "otros-2": {
        nombre: "Otros 2",

        imagen: "../assets/img/otros/otros-2/banderin2.jpeg",

        descripcion: "Producto bordado correspondiente a Otros 2.",

        colores: [
          {
            nombre: "Rojo",
            imagen: "../assets/img/otros/otros-2/rojo.webp",
          },

          {
            nombre: "Azul",
            imagen: "../assets/img/otros/otros-2/azul.webp",
          },

          {
            nombre: "Verde",
            imagen: "../assets/img/otros/otros-2/verde.webp",
          },

          {
            nombre: "Dorado",
            imagen: "../assets/img/otros/otros-2/dorado.webp",
          },
        ],
      },
    },
  },
};

const rutasImagenesReales = {
  "bandos/modelo-1": "../assets/img/bandos/modelo-01/bandoModelo1.jpeg",
  "guiones/modelo-1": "../assets/img/guiones/modelo-01/guionModelo1.jpeg",
  "mantos/pequeno": "../assets/img/mantos/pequeño/mantoPequeño.jpeg",
  "mantos/mediano": "../assets/img/mantos/mediano/mantoMediano.jpeg",
  "mantos/grande": "../assets/img/mantos/grande/mantoGrande.jpeg",
  "panos/pequeno": "../assets/img/panos/pequeño/panoPequeño.jpeg",
  "panos/mediano": "../assets/img/panos/mediano/panoMediano.jpeg",
  "panos/grande": "../assets/img/panos/grande/panoGrande.jpeg",
  "otros/otros-1": "../assets/img/otros/otros-1/gallardete.jpeg",
  "otros/otros-2": "../assets/img/otros/otros-2/banderin2.jpeg",
};

Object.entries(catalogo).forEach(([categoria, datosProducto]) => {
  Object.entries(datosProducto.modelos).forEach(([modelo, datosModelo]) => {
    const ruta = rutasImagenesReales[`${categoria}/${modelo}`];

    if (!ruta) {
      return;
    }

    datosModelo.imagen = ruta;
    datosModelo.colores = datosModelo.colores.map((color) => ({
      ...color,
      imagen: ruta,
    }));
  });
});

/* =========================================================
   ELEMENTOS DEL DOM
========================================================= */

const tarjetasProducto = document.querySelectorAll(".producto-card");

const detalleProducto = document.getElementById("producto-detalle");

const cerrarDetalle = document.getElementById("cerrar-detalle");

const detalleImagen = document.getElementById("detalle-imagen");

const detalleCategoria = document.getElementById("detalle-categoria");

const detalleTitulo = document.getElementById("detalle-titulo");

const detalleDescripcion = document.getElementById("detalle-descripcion");

const coloresGrid = document.getElementById("colores-grid");

const medidasList = document.getElementById("medidas-list");

const whatsappProducto = document.getElementById("whatsapp-producto");

/* =========================================================
   PRODUCTO ACTUAL
========================================================= */

let productoActual = null;

/* =========================================================
   MODELO ACTUAL
========================================================= */

let modeloActual = null;

/* =========================================================
   ABRIR PRODUCTO
========================================================= */

function abrirProducto(producto) {
  /*
       Si la categoría no existe,
       no hacemos nada.
    */

  if (!catalogo[producto]) {
    console.warn(`El producto "${producto}" no existe en el catálogo.`);

    return;
  }

  productoActual = producto;

  const datosProducto = catalogo[producto];

  /*
       Actualizar información principal
    */

  if (detalleCategoria) {
    detalleCategoria.textContent = datosProducto.categoria;
  }

  if (detalleDescripcion) {
    detalleDescripcion.textContent = datosProducto.descripcion;
  }

  /*
       Limpiar colores anteriores
    */

  if (coloresGrid) {
    coloresGrid.innerHTML = "";
  }

  /*
       Crear botones de modelos / tamaños
    */

  crearBotonesModelo(datosProducto);

  /*
       Mostrar primer modelo automáticamente
    */

  const modelos = Object.keys(datosProducto.modelos);

  if (modelos.length > 0) {
    seleccionarModelo(modelos[0]);
  }

  /*
       Mostrar sección de detalle
    */

  if (detalleProducto) {
    detalleProducto.hidden = false;

    detalleProducto.classList.remove("producto-aparece");

    /*
           Permite reiniciar la animación
        */

    void detalleProducto.offsetWidth;

    detalleProducto.classList.add("producto-aparece");

    /*
           Llevar al usuario al detalle
        */

    setTimeout(() => {
      detalleProducto.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
}

/* =========================================================
   CREAR BOTONES DE MODELO
========================================================= */

function crearBotonesModelo(datosProducto) {
  if (!medidasList) {
    return;
  }

  medidasList.innerHTML = "";

  const modelos = Object.entries(datosProducto.modelos);

  modelos.forEach(([idModelo, modelo]) => {
    const boton = document.createElement("button");

    boton.type = "button";

    boton.className = "medida-button";

    boton.dataset.medida = idModelo;

    boton.textContent = modelo.nombre;

    boton.addEventListener("click", () => {
      seleccionarModelo(idModelo);
    });

    medidasList.appendChild(boton);
  });
}

/* =========================================================
   SELECCIONAR MODELO
========================================================= */

function seleccionarModelo(idModelo) {
  if (!productoActual) {
    return;
  }

  const datosProducto = catalogo[productoActual];

  const modelo = datosProducto.modelos[idModelo];

  if (!modelo) {
    return;
  }

  modeloActual = idModelo;

  /*
       Actualizar título
    */

  if (detalleTitulo) {
    detalleTitulo.textContent = `${datosProducto.nombre} ${modelo.nombre}`;
  }

  /*
       Actualizar descripción
    */

  if (detalleDescripcion) {
    detalleDescripcion.textContent = modelo.descripcion;
  }

  /*
       Actualizar imagen principal
    */

  if (detalleImagen) {
    detalleImagen.src = modelo.imagen;

    detalleImagen.alt = `${datosProducto.nombre} ${modelo.nombre}`;
  }

  /*
       Marcar botón activo
    */

  const botones = medidasList.querySelectorAll(".medida-button");

  botones.forEach((boton) => {
    boton.classList.toggle("active", boton.dataset.medida === idModelo);
  });

  /*
       Mostrar colores
    */

  mostrarColores(modelo.colores);

  /*
       Actualizar WhatsApp
    */

  actualizarWhatsApp(datosProducto.nombre, modelo.nombre);
}

/* =========================================================
   MOSTRAR COLORES
========================================================= */

function mostrarColores(colores) {
  if (!coloresGrid) {
    return;
  }

  coloresGrid.innerHTML = "";

  /*
       Si no existen colores
    */

  if (!colores || colores.length === 0) {
    coloresGrid.innerHTML = `
            <div class="colores-vacio">
                <p>
                    Actualmente no hay colores registrados
                    para este producto.
                </p>
            </div>
        `;

    return;
  }

  /*
       Crear cada color
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
               Al tocar un color
            */

    tarjeta.addEventListener("click", () => {
      seleccionarColor(tarjeta, color);
    });

    coloresGrid.appendChild(tarjeta);
  });
}

/* =========================================================
   SELECCIONAR COLOR
========================================================= */

function seleccionarColor(tarjeta, color) {
  /*
       Quitar selección anterior
    */

  const colores = coloresGrid.querySelectorAll(".color-card");

  colores.forEach((elemento) => {
    elemento.classList.remove("active");
  });

  /*
       Activar color seleccionado
    */

  tarjeta.classList.add("active");

  /*
       Actualizar imagen principal
       usando la imagen del color.
    */

  if (detalleImagen) {
    detalleImagen.src = color.imagen;

    detalleImagen.alt = `${color.nombre} - ${detalleTitulo.textContent}`;
  }
}

/* =========================================================
   ACTUALIZAR WHATSAPP
========================================================= */

function actualizarWhatsApp(producto, modelo) {
  if (!whatsappProducto) {
    return;
  }

  /*
       Número de WhatsApp
       Perú: +51
    */

  const numero = "51954861832";

  /*
       Mensaje automático
    */

  const mensaje = `Hola, quisiera consultar por ${producto} - ${modelo}.`;

  /*
       Codificar mensaje
    */

  const mensajeCodificado = encodeURIComponent(mensaje);

  /*
       Crear enlace
    */

  whatsappProducto.href = `https://wa.me/${numero}?text=${mensajeCodificado}`;
}

/* =========================================================
   CERRAR DETALLE
========================================================= */

function cerrarProducto() {
  if (!detalleProducto) {
    return;
  }

  detalleProducto.classList.remove("producto-aparece");

  detalleProducto.hidden = true;

  /*
       Volver al catálogo
    */

  const seccionProductos = document.querySelector(".productos");

  if (seccionProductos) {
    setTimeout(() => {
      seccionProductos.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  productoActual = null;

  modeloActual = null;
}

/* =========================================================
   EVENTO: TARJETAS DE PRODUCTOS
========================================================= */

tarjetasProducto.forEach((tarjeta) => {
  tarjeta.addEventListener("click", (evento) => {
    /*
                   Evitamos que el botón provoque
                   acciones duplicadas.
                */

    const boton = evento.target.closest(".producto-card__button");

    const producto = tarjeta.dataset.producto;

    if (producto) {
      abrirProducto(producto);
    }
  });
});

/* =========================================================
   EVENTO: BOTONES "VER COLORES"
========================================================= */

const botonesProducto = document.querySelectorAll(".producto-card__button");

botonesProducto.forEach((boton) => {
  boton.addEventListener("click", (evento) => {
    evento.stopPropagation();

    const producto = boton.dataset.modelo;

    if (producto) {
      abrirProducto(producto);
    }
  });
});

/* =========================================================
   EVENTO: CERRAR DETALLE
========================================================= */

if (cerrarDetalle) {
  cerrarDetalle.addEventListener("click", cerrarProducto);
}

/* =========================================================
   EVITAR ERROR SI LA IMAGEN NO EXISTE
========================================================= */

if (detalleImagen) {
  detalleImagen.addEventListener("error", () => {
    console.warn("No se pudo cargar la imagen del producto.");
  });
}

/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /*
           El catálogo queda preparado
           cuando carga la página.
        */

  console.log("Catálogo J&M cargado correctamente.");
});
