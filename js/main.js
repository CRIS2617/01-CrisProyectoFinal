/* =========================================================
   BORDADURÍA INTERNACIONAL J&M
   MAIN.JS

   Funciones:
   - Menú móvil
   - Abrir / cerrar navegación
   - Animación del botón hamburguesa
   - Cerrar menú al seleccionar una opción
   - Scroll suave
   - Cerrar menú al hacer clic fuera
========================================================= */

/* =========================================================
   ELEMENTOS DEL MENÚ
========================================================= */

const menuButton = document.querySelector(".menu-button");

const navigation = document.querySelector(".nav");

const navigationLinks = document.querySelectorAll(".nav__link");

/* =========================================================
   ABRIR / CERRAR MENÚ
========================================================= */

function toggleMenu() {
  if (!menuButton || !navigation) {
    return;
  }

  /*
       Alternar estado del menú
    */

  navigation.classList.toggle("nav--active");

  /*
       Animar botón hamburguesa
    */

  menuButton.classList.toggle("active");

  /*
       Actualizar accesibilidad
    */

  const menuAbierto = navigation.classList.contains("nav--active");

  menuButton.setAttribute("aria-expanded", menuAbierto);
}

/* =========================================================
   EVENTO DEL BOTÓN HAMBURGUESA
========================================================= */

if (menuButton) {
  menuButton.addEventListener("click", toggleMenu);
}

/* =========================================================
   CERRAR MENÚ
========================================================= */

function closeMenu() {
  if (!menuButton || !navigation) {
    return;
  }

  navigation.classList.remove("nav--active");

  menuButton.classList.remove("active");

  menuButton.setAttribute("aria-expanded", "false");
}

/* =========================================================
   CERRAR AL SELECCIONAR UN ENLACE
========================================================= */

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

/* =========================================================
   CERRAR AL TOCAR FUERA DEL MENÚ
========================================================= */

document.addEventListener("click", (event) => {
  if (!navigation || !menuButton) {
    return;
  }

  const menuEstaAbierto = navigation.classList.contains("nav--active");

  if (!menuEstaAbierto) {
    return;
  }

  /*
           Si el clic fue dentro del menú
           o sobre el botón, no hacemos nada.
        */

  if (navigation.contains(event.target) || menuButton.contains(event.target)) {
    return;
  }

  closeMenu();
});

/* =========================================================
   ESC PARA CERRAR EL MENÚ
========================================================= */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

/* =========================================================
   SCROLL SUAVE
========================================================= */

const enlacesInternos = document.querySelectorAll('a[href^="#"]');

enlacesInternos.forEach((enlace) => {
  enlace.addEventListener("click", (event) => {
    const destino = enlace.getAttribute("href");

    /*
                   Ignorar enlaces que solamente
                   tengan "#"
                */

    if (!destino || destino === "#") {
      return;
    }

    const elemento = document.querySelector(destino);

    /*
                   Si no existe el elemento,
                   dejamos que el enlace funcione
                   normalmente.
                */

    if (!elemento) {
      return;
    }

    event.preventDefault();

    elemento.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/* =========================================================
   HEADER AL HACER SCROLL
========================================================= */

const header = document.querySelector(".header");

function actualizarHeader() {
  if (!header) {
    return;
  }

  /*
       Cuando el usuario baja un poco,
       agregamos una clase.
    */

  if (window.scrollY > 20) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
}

window.addEventListener("scroll", actualizarHeader, {
  passive: true,
});

/* =========================================================
   CAMBIO AUTOMÁTICO AL PASAR DE CELULAR
   A ESCRITORIO
========================================================= */

window.addEventListener("resize", () => {
  /*
           900px corresponde al breakpoint
           utilizado en header.css.
        */

  if (window.innerWidth >= 900) {
    closeMenu();
  }
});

/* =========================================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================================= */

const yearElements = document.querySelectorAll("[data-year]");

yearElements.forEach((elemento) => {
  elemento.textContent = new Date().getFullYear();
});

/* =========================================================
   ANIMACIÓN DE ELEMENTOS AL APARECER
========================================================= */

const elementosAnimados = document.querySelectorAll(".animar");

/*
   IntersectionObserver permite activar
   la animación cuando el elemento entra
   en la pantalla.

   Es especialmente útil en celulares.
*/

if (elementosAnimados.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entradas, observerActual) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");

          observerActual.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  elementosAnimados.forEach((elemento) => {
    observer.observe(elemento);
  });
}

/* =========================================================
   PREVENIR DOBLE TOQUE ACCIDENTAL
   EN ELEMENTOS INTERACTIVOS
========================================================= */

const botones = document.querySelectorAll("button");

botones.forEach((boton) => {
  boton.addEventListener(
    "touchstart",
    () => {
      boton.classList.add("touching");
    },
    {
      passive: true,
    },
  );

  boton.addEventListener(
    "touchend",
    () => {
      setTimeout(() => {
        boton.classList.remove("touching");
      }, 100);
    },
    {
      passive: true,
    },
  );
});

/* =========================================================
   SLIDESHOW DE IMÁGENES
========================================================= */

function inicializarSlideshow() {
  const slideshowImgs = document.querySelectorAll('.slideshow-img');

  slideshowImgs.forEach(img => {
    const rawData = img.getAttribute('data-images');
    if (!rawData) return;

    const images = rawData.split(',').map(s => s.trim());
    if (images.length <= 1) return;

    let currentIndex = 0;
    
    // Transición suave por defecto
    img.style.transition = 'opacity 0.2s ease';

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      
      img.style.opacity = '0.4';
      
      setTimeout(() => {
        img.src = images[currentIndex];
        img.style.opacity = '1';
      }, 200);
      
    }, 2000);
  });
}

/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /*
           Estado inicial del botón
        */

  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.setAttribute("aria-label", "Abrir menú");
  }

  /*
           Estado inicial del header
        */

  actualizarHeader();
  
  inicializarSlideshow();

  console.log("Bordaduría Internacional J&M - sitio cargado correctamente.");
});
