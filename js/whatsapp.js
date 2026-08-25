/* =========================================================
   BORDADURÍA INTERNACIONAL J&M
   WHATSAPP.JS

   Funciones:
   - Botón general de WhatsApp
   - Botones de consulta de productos
   - Mensajes personalizados
   - Abrir WhatsApp desde celular
   - Compatibilidad con WhatsApp Web en PC
========================================================= */

/* =========================================================
   CONFIGURACIÓN
========================================================= */

/*
   Número de WhatsApp de la bordaduría.

   IMPORTANTE:
   Escribir el número con código de país,
   pero SIN:
   +, espacios, guiones ni paréntesis.

   Perú = 51
*/

const WHATSAPP_NUMERO = "51954861832";

/* =========================================================
   MENSAJE GENERAL
========================================================= */

const MENSAJE_GENERAL =
  "Hola, quisiera obtener información sobre los productos de la Bordaduría Internacional J&M.";

/* =========================================================
   CREAR ENLACE DE WHATSAPP
========================================================= */

function crearEnlaceWhatsApp(mensaje) {
  /*
       Codificar el mensaje para que pueda
       utilizarse correctamente dentro de la URL.
    */

  const mensajeCodificado = encodeURIComponent(mensaje);

  return `https://wa.me/${WHATSAPP_NUMERO}?text=${mensajeCodificado}`;
}

/* =========================================================
   ABRIR WHATSAPP
========================================================= */

function abrirWhatsApp(mensaje = MENSAJE_GENERAL) {
  const enlace = crearEnlaceWhatsApp(mensaje);

  /*
       Abrir WhatsApp en una nueva pestaña.

       En celulares normalmente abrirá
       la aplicación de WhatsApp.
    */

  window.open(enlace, "_blank", "noopener,noreferrer");
}

/* =========================================================
   MENSAJE PARA UN PRODUCTO
========================================================= */

function crearMensajeProducto(producto, modelo = "", color = "") {
  let mensaje = `Hola, quisiera consultar por ${producto}`;

  /*
       Agregar modelo si existe.
    */

  if (modelo) {
    mensaje += `, modelo/tamaño ${modelo}`;
  }

  /*
       Agregar color si existe.
    */

  if (color) {
    mensaje += `, color ${color}`;
  }

  mensaje += ".";

  return mensaje;
}

/* =========================================================
   BOTÓN GENERAL DE WHATSAPP
========================================================= */

function inicializarWhatsAppGeneral() {
  const botones = document.querySelectorAll(".whatsapp");

  botones.forEach((boton) => {
    /*
               Evitar procesar botones
               que pertenecen a productos.
            */

    if (boton.hasAttribute("data-whatsapp-producto")) {
      return;
    }

    boton.addEventListener("click", (event) => {
      /*
                       Si el elemento ya tiene
                       un enlace manual, lo respetamos.
                    */

      const href = boton.getAttribute("href");

      if (href && href !== "#" && !href.startsWith("javascript:")) {
        return;
      }

      event.preventDefault();

      abrirWhatsApp();
    });
  });
}

/* =========================================================
   BOTONES DE CONSULTA DE PRODUCTOS
========================================================= */

function inicializarBotonesProducto() {
  const botones = document.querySelectorAll("[data-whatsapp-producto]");

  botones.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      event.preventDefault();

      /*
                       Obtener información
                       desde los atributos HTML.
                    */

      const producto = boton.dataset.producto || "este producto";

      const modelo = boton.dataset.modelo || "";

      const color = boton.dataset.color || "";

      /*
                       Crear mensaje.
                    */

      const mensaje = crearMensajeProducto(producto, modelo, color);

      /*
                       Abrir WhatsApp.
                    */

      abrirWhatsApp(mensaje);
    });
  });
}

/* =========================================================
   ACTUALIZAR BOTÓN DESDE EL CATÁLOGO
========================================================= */

function actualizarBotonWhatsApp(boton, producto, modelo, color = "") {
  if (!boton) {
    return;
  }

  /*
       Crear el mensaje.
    */

  const mensaje = crearMensajeProducto(producto, modelo, color);

  /*
       Crear URL.
    */

  const enlace = crearEnlaceWhatsApp(mensaje);

  /*
       Actualizar enlace.
    */

  boton.href = enlace;

  /*
       Guardar datos.
    */

  boton.dataset.producto = producto;

  boton.dataset.modelo = modelo;

  if (color) {
    boton.dataset.color = color;
  }
}

/* =========================================================
   BOTÓN FLOTANTE DE WHATSAPP
========================================================= */

function crearBotonFlotante() {
  /*
       Buscar si ya existe.
    */

  const existente = document.querySelector(".whatsapp-float");

  /*
       Si ya existe, no crear otro.
    */

  if (existente) {
    return;
  }

  /*
       Crear botón.
    */

  const boton = document.createElement("a");

  boton.className = "whatsapp-float";

  boton.href = crearEnlaceWhatsApp(MENSAJE_GENERAL);

  boton.target = "_blank";

  boton.rel = "noopener noreferrer";

  boton.setAttribute("aria-label", "Contactar por WhatsApp");

  boton.innerHTML = `

        <span
            class="whatsapp-float__icon"
            aria-hidden="true"
        >
            WA
        </span>

        <span
            class="whatsapp-float__text"
        >
            WhatsApp
        </span>

    `;

  /*
       Agregar al documento.
    */

  document.body.appendChild(boton);
}

/* =========================================================
   DETECTAR CELULAR
========================================================= */

function esDispositivoMovil() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

/* =========================================================
   CONFIGURAR BOTONES
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  inicializarWhatsAppGeneral();

  inicializarBotonesProducto();

  /*
           El botón flotante se puede activar
           cuando quieras.

           Actualmente está desactivado para
           no agregarlo automáticamente a todas
           las páginas.
        */

  // crearBotonFlotante();
});
