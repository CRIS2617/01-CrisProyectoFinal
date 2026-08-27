/* =========================================================
   BORDADURÍA INTERNACIONAL J&M
   PRODUCTOS.JS

   Funciones:
   - Interacción de tarjetas
   - Selección visual de productos
   - Vista de imágenes
   - Animaciones
   - Botones de consulta
   - Comportamiento para celulares
========================================================= */

/* =========================================================
   ESPERAR A QUE CARGUE EL DOCUMENTO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  inicializarProductos();
  inicializarBotonesVer();
});

/* =========================================================
   INICIALIZAR PRODUCTOS
========================================================= */

function inicializarProductos() {
  const productos = document.querySelectorAll(".producto-card");

  /*
       Si la página no tiene tarjetas,
       simplemente terminamos.
    */

  if (productos.length === 0) {
    return;
  }

  productos.forEach((producto, indice) => {
    prepararProducto(producto, indice);
  });
}

/* =========================================================
   PREPARAR TARJETA
========================================================= */

function prepararProducto(producto, indice) {
  /*
       Agregar un identificador si
       todavía no existe.
    */

  if (!producto.dataset.productoId) {
    producto.dataset.productoId = `producto-${indice + 1}`;
  }

  /*
       Preparar imagen
    */

  prepararImagen(producto);

  /*
       Preparar botones
    */

  prepararBotones(producto);

  /*
       Preparar interacción táctil
    */

  prepararTouch(producto);
}

/* =========================================================
   PREPARAR IMAGEN
========================================================= */

function prepararImagen(producto) {
  const imagen = producto.querySelector("img");

  if (!imagen) {
    return;
  }

  /*
       Carga diferida para mejorar
       el rendimiento en celulares.
    */

  imagen.loading = "lazy";

  /*
       Evitar imágenes demasiado grandes
       dentro de la tarjeta.
    */

  imagen.decoding = "async";

  /*
       Si la imagen falla,
       mostramos una alternativa visual.
    */

  imagen.addEventListener("error", () => {
    imagen.style.display = "none";

    const contenedor = imagen.parentElement;

    if (contenedor) {
      contenedor.classList.add("imagen-error");
    }
  });
}

/* =========================================================
   BOTONES DE PRODUCTO
========================================================= */

function prepararBotones(producto) {
  const botones = producto.querySelectorAll("button");

  botones.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      /*
                       Evitar que el clic
                       se propague a la tarjeta.
                    */

      event.stopPropagation();

      /*
                       Efecto visual.
                    */

      activarBoton(boton);
    });
  });
}

/* =========================================================
   EFECTO DEL BOTÓN
========================================================= */

function activarBoton(boton) {
  boton.classList.add("button-clicked");

  setTimeout(() => {
    boton.classList.remove("button-clicked");
  }, 180);
}

/* =========================================================
   INTERACCIÓN TÁCTIL
========================================================= */

function prepararTouch(producto) {
  producto.addEventListener(
    "touchstart",
    () => {
      producto.classList.add("touch-active");
    },
    {
      passive: true,
    },
  );

  producto.addEventListener(
    "touchend",
    () => {
      setTimeout(() => {
        producto.classList.remove("touch-active");
      }, 120);
    },
    {
      passive: true,
    },
  );

  producto.addEventListener(
    "touchcancel",
    () => {
      producto.classList.remove("touch-active");
    },
    {
      passive: true,
    },
  );
}

/* =========================================================
   SELECCIONAR TARJETA
========================================================= */

function seleccionarProducto(producto) {
  const productos = document.querySelectorAll(".producto-card");

  /*
       Quitar selección anterior.
    */

  productos.forEach((elemento) => {
    elemento.classList.remove("selected");
  });

  /*
       Seleccionar producto actual.
    */

  producto.classList.add("selected");

  /*
       Guardar temporalmente el producto
       seleccionado.
    */

  const productoId = producto.dataset.productoId;

  sessionStorage.setItem("productoSeleccionado", productoId);
}

/* =========================================================
   BOTONES "VER PRODUCTO"
========================================================= */

function inicializarBotonesVer() {
  const botonesVer = document.querySelectorAll(".producto-card__button");

  botonesVer.forEach((boton) => {
    boton.addEventListener("click", () => {
      const tarjeta = boton.closest(".producto-card");

      if (!tarjeta) {
        return;
      }

      seleccionarProducto(tarjeta);
    });
  });
}

/* =========================================================
   CARGAR PRODUCTO SELECCIONADO
========================================================= */

function recuperarProductoSeleccionado() {
  const productoId = sessionStorage.getItem("productoSeleccionado");

  if (!productoId) {
    return;
  }

  const producto = document.querySelector(`[data-producto-id="${productoId}"]`);

  if (!producto) {
    return;
  }

  producto.classList.add("selected");
}

/* =========================================================
   LIMPIAR PRODUCTO SELECCIONADO
========================================================= */

function limpiarProductoSeleccionado() {
  sessionStorage.removeItem("productoSeleccionado");

  const productos = document.querySelectorAll(".producto-card");

  productos.forEach((producto) => {
    producto.classList.remove("selected");
  });
}

/* =========================================================
   BOTÓN DE CERRAR / LIMPIAR
========================================================= */

const botonesLimpiar = document.querySelectorAll("[data-limpiar-producto]");

botonesLimpiar.forEach((boton) => {
  boton.addEventListener("click", () => {
    limpiarProductoSeleccionado();
  });
});

/* =========================================================
   IMÁGENES DE GALERÍA
========================================================= */

const imagenesGaleria = document.querySelectorAll(
  ".producto-galeria__item img",
);

imagenesGaleria.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    abrirImagen(imagen);
  });
});

/* =========================================================
   ABRIR IMAGEN
========================================================= */

function abrirImagen(imagen) {
  if (!imagen.src) {
    return;
  }

  /*
       Crear visor.
    */

  const visor = document.createElement("div");

  visor.className = "imagen-lightbox";

  visor.innerHTML = `

        <button
            type="button"
            class="imagen-lightbox__cerrar"
            aria-label="Cerrar imagen"
        >
            ×
        </button>

        <img
            src="${imagen.src}"
            alt="${imagen.alt || "Imagen del producto"}"
        >

    `;

  document.body.appendChild(visor);

  /*
       Evitar desplazamiento de la página
       mientras el visor está abierto.
    */

  document.body.classList.add("lightbox-abierto");

  /*
       Cerrar visor.
    */

  const cerrar = visor.querySelector(".imagen-lightbox__cerrar");

  cerrar.addEventListener("click", () => {
    cerrarImagen(visor);
  });

  /*
       Cerrar al tocar fuera de la imagen.
    */

  visor.addEventListener("click", (event) => {
    if (event.target === visor) {
      cerrarImagen(visor);
    }
  });

  /*
       Cerrar con ESC.
    */

  document.addEventListener("keydown", function cerrarConEscape(event) {
    if (event.key === "Escape") {
      cerrarImagen(visor);

      document.removeEventListener("keydown", cerrarConEscape);
    }
  });
}

/* =========================================================
   CERRAR IMAGEN
========================================================= */

function cerrarImagen(visor) {
  if (!visor) {
    return;
  }

  visor.remove();

  document.body.classList.remove("lightbox-abierto");
}

/* =========================================================
   ANIMACIÓN DE PRODUCTOS
========================================================= */

function animarProductos() {
  const productos = document.querySelectorAll(".producto-card");

  /*
       Si el navegador no soporta
       IntersectionObserver,
       mostramos todos.
    */

  if (!("IntersectionObserver" in window)) {
    productos.forEach((producto) => {
      producto.classList.add("producto-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entradas, observerActual) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("producto-visible");

          observerActual.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  productos.forEach((producto) => {
    observer.observe(producto);
  });
}

/* =========================================================
   PREVENIR ZOOM ACCIDENTAL EN DOBLE TOQUE
========================================================= */

let ultimoToque = 0;

document.addEventListener(
  "touchend",
  (event) => {
    const ahora = Date.now();

    const diferencia = ahora - ultimoToque;

    if (
      diferencia < 300 &&
      event.target.closest("button, .producto-card, .color-card")
    ) {
      event.preventDefault();
    }

    ultimoToque = ahora;
  },
  {
    passive: false,
  },
);

/* =========================================================
   INICIALIZACIÓN FINAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  recuperarProductoSeleccionado();

  animarProductos();
});
