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

const paletaColores = {
  Camote: "#911e7f",
  Morado: "#7E3D92",
  Barney: "#9D4DCE",
  Celeste: "#8bebf4",
  Turquesa: "#00ddf1",
  "Verde hoja": "#4FAE58",
  "Verde jade": "#1EA67A",
  "Verde oscuro": "#1F5C4F",
  "Verde limon": "#A9D64E",
  Azulino: "#1a4b90",
  Rojo: "#D12E39",
  Fucsia: "#D32477",
  "Amarillo patito": "#efe33a",
  "Amarillo oro": "#D9B033",
  Blanco: "#F4F4F4",
  Negro: "#1A1A1A",
  Perla: "#E8E1D7",
  Guindo: "#5f192f",
  Vino: "#901f3a",
};

function generarImagenColor(nombreColor) {
  const hex = paletaColores[nombreColor] || "#D9D9D9";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="16" fill="${hex}"/>
      <rect x="8" y="8" width="104" height="104" rx="12" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="3"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}

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
        nombre: "Modelo simple",
        imagen: "../assets/img/bandos/modelo-01/bandoModelo1.jpeg",
        descripcion: "Bando bordado del modelo simple.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/bandos/modelo-1/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/bandos/modelo-1/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/bandos/modelo-1/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/bandos/modelo-1/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/bandos/modelo-1/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/bandos/modelo-1/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/bandos/modelo-1/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/bandos/modelo-1/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/bandos/modelo-1/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/bandos/modelo-1/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/bandos/modelo-1/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/bandos/modelo-1/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/bandos/modelo-1/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/bandos/modelo-1/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/bandos/modelo-1/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/bandos/modelo-1/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/bandos/modelo-1/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/bandos/modelo-1/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/bandos/modelo-1/verde.webp" },
        ],
      },
      "modelo-paloma": {
        nombre: "Modelo paloma",
        imagen: "../assets/img/bandos/modelo-02/bandoModelo2.jpeg",
        descripcion: "Bando bordado del modelo paloma.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/bandos/modelo-2/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/bandos/modelo-2/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/bandos/modelo-2/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/bandos/modelo-2/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/bandos/modelo-2/rojo.webp" }
        ],
      },
      "modelo-pavo-gordo": {
        nombre: "Modelo pavo gordo",
        imagen: "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
        descripcion: "Bando bordado del modelo pavo gordo.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/bandos/modelo-3/rojo.webp" }
        ],
      },
      "modelo-pavo-gordo-nuevo": {
        nombre: "Modelo pavo gordo nuevo",
        imagen: "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
        descripcion: "Bando bordado del modelo pavo gordo nuevo.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/bandos/modelo-3/rojo.webp" }
        ],
      },
      "modelo-pavo-flaco": {
        nombre: "Modelo pavo flaco",
        imagen: "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
        descripcion: "Bando bordado del modelo pavo flaco.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/bandos/modelo-3/rojo.webp" }
        ],
      },
      "modelo-pavo-extra": {
        nombre: "Modelo pavo extra",
        imagen: "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
        descripcion: "Bando bordado del modelo pavo extra.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/bandos/modelo-3/rojo.webp" }
        ],
      },
      "modelo-pavo-doble-cola": {
        nombre: "Modelo pavo doble cola",
        imagen: "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
        descripcion: "Bando bordado del modelo pavo doble cola.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/bandos/modelo-3/rojo.webp" }
        ],
      },
      "modelo-papagayo": {
        nombre: "Modelo papagayo",
        imagen: "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
        descripcion: "Bando bordado del modelo papagayo.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/bandos/modelo-3/rojo.webp" }
        ],
      }
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
      "1-metro": {
        nombre: "1 metro",

        imagen: "../assets/img/guiones/modelo-01/guionModelo1.jpeg",

        descripcion: "Guion bordado de 1 metro.",

        colores: [
          { nombre: "Camote", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
        ],
      },
      "1.1-metros": {
        nombre: "1.1 metros",

        imagen: "../assets/img/guiones/modelo-01/guionModelo1.jpeg",

        descripcion: "Guion bordado de 1.1 metros.",

        colores: [
          { nombre: "Camote", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
        ],
      },
      "1.2-metros": {
        nombre: "1.2 metros",

        imagen: "../assets/img/guiones/modelo-01/guionModelo1.jpeg",

        descripcion: "Guion bordado de 1.2 metros.",

        colores: [
          { nombre: "Camote", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/guiones/modelo-1/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/guiones/modelo-1/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/guiones/modelo-1/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/guiones/modelo-1/verde.webp" },
        ],
      }
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
          { nombre: "Camote", imagen: "../assets/img/mantos/pequeno/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/mantos/pequeno/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/mantos/pequeno/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/mantos/pequeno/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/mantos/pequeno/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/mantos/pequeno/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/mantos/pequeno/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/mantos/pequeno/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/mantos/pequeno/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/mantos/pequeno/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/mantos/pequeno/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/mantos/pequeno/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/mantos/pequeno/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/mantos/pequeno/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/mantos/pequeno/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/mantos/pequeno/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/mantos/pequeno/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/mantos/pequeno/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/mantos/pequeno/verde.webp" },
        ],
      },

      mediano: {
        nombre: "Mediano",

        imagen: "../assets/img/mantos/mediano/mantoMediano.jpeg",

        descripcion: "Manto bordado en tamaño mediano.",

        colores: [
          { nombre: "Camote", imagen: "../assets/img/mantos/mediano/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/mantos/mediano/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/mantos/mediano/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/mantos/mediano/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/mantos/mediano/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/mantos/mediano/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/mantos/mediano/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/mantos/mediano/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/mantos/mediano/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/mantos/mediano/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/mantos/mediano/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/mantos/mediano/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/mantos/mediano/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/mantos/mediano/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/mantos/mediano/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/mantos/mediano/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/mantos/mediano/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/mantos/mediano/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/mantos/mediano/verde.webp" },
        ],
      },

      grande: {
        nombre: "Grande",

        imagen: "../assets/img/mantos/grande/mantoGrande.jpeg",

        descripcion: "Manto bordado en tamaño grande.",

        colores: [
          { nombre: "Camote", imagen: "../assets/img/mantos/grande/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/mantos/grande/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/mantos/grande/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/mantos/grande/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/mantos/grande/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/mantos/grande/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/mantos/grande/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/mantos/grande/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/mantos/grande/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/mantos/grande/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/mantos/grande/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/mantos/grande/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/mantos/grande/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/mantos/grande/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/mantos/grande/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/mantos/grande/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/mantos/grande/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/mantos/grande/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/mantos/grande/verde.webp" },
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
          { nombre: "Camote", imagen: "../assets/img/panos/pequeno/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/panos/pequeno/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/panos/pequeno/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/panos/pequeno/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/panos/pequeno/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/panos/pequeno/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/panos/pequeno/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/panos/pequeno/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/panos/pequeno/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/panos/pequeno/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/panos/pequeno/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/panos/pequeno/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/panos/pequeno/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/panos/pequeno/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/panos/pequeno/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/panos/pequeno/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/panos/pequeno/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/panos/pequeno/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/panos/pequeno/verde.webp" },
        ],
      },

      mediano: {
        nombre: "Mediano",

        imagen: "../assets/img/panos/mediano/panoMediano.jpeg",

        descripcion: "Paño bordado en tamaño mediano.",

        colores: [
          { nombre: "Camote", imagen: "../assets/img/panos/mediano/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/panos/mediano/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/panos/mediano/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/panos/mediano/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/panos/mediano/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/panos/mediano/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/panos/mediano/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/panos/mediano/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/panos/mediano/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/panos/mediano/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/panos/mediano/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/panos/mediano/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/panos/mediano/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/panos/mediano/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/panos/mediano/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/panos/mediano/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/panos/mediano/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/panos/mediano/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/panos/mediano/verde.webp" },
        ],
      },

      grande: {
        nombre: "Grande",

        imagen: "../assets/img/panos/grande/panoGrande.jpeg",

        descripcion: "Paño bordado en tamaño grande.",

        colores: [
          { nombre: "Camote", imagen: "../assets/img/panos/grande/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/panos/grande/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/panos/grande/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/panos/grande/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/panos/grande/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/panos/grande/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/panos/grande/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/panos/grande/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/panos/grande/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/panos/grande/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/panos/grande/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/panos/grande/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/panos/grande/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/panos/grande/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/panos/grande/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/panos/grande/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/panos/grande/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/panos/grande/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/panos/grande/verde.webp" },
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
        nombre: "Banderines",

        imagen: "../assets/img/otros/otros-1/gallardete.jpeg",

        descripcion: "Producto bordado correspondiente a banderines.",

        colores: [
          { nombre: "Camote", imagen: "../assets/img/otros/otros-1/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/otros/otros-1/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/otros/otros-1/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/otros/otros-1/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/otros/otros-1/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/otros/otros-1/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/otros/otros-1/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/otros/otros-1/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/otros/otros-1/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/otros/otros-1/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/otros/otros-1/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/otros/otros-1/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/otros/otros-1/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/otros/otros-1/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/otros/otros-1/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/otros/otros-1/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/otros/otros-1/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/otros/otros-1/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/otros/otros-1/verde.webp" },
        ],
      },

      "otros-2": {
        nombre: "Banderolas",

        imagen: "../assets/img/otros/otros-2/banderin2.jpeg",

        descripcion: "Producto bordado correspondiente a banderolas.",

        colores: [
          { nombre: "Camote", imagen: "../assets/img/otros/otros-2/rojo.webp" },
          { nombre: "Morado", imagen: "../assets/img/otros/otros-2/azul.webp" },
          { nombre: "Barney", imagen: "../assets/img/otros/otros-2/verde.webp" },
          { nombre: "Celeste", imagen: "../assets/img/otros/otros-2/dorado.webp" },
          { nombre: "Turquesa", imagen: "../assets/img/otros/otros-2/rojo.webp" },
          { nombre: "Verde hoja", imagen: "../assets/img/otros/otros-2/azul.webp" },
          { nombre: "Verde jade", imagen: "../assets/img/otros/otros-2/verde.webp" },
          { nombre: "Verde oscuro", imagen: "../assets/img/otros/otros-2/dorado.webp" },
          { nombre: "Verde limon", imagen: "../assets/img/otros/otros-2/rojo.webp" },
          { nombre: "Azulino", imagen: "../assets/img/otros/otros-2/azul.webp" },
          { nombre: "Rojo", imagen: "../assets/img/otros/otros-2/verde.webp" },
          { nombre: "Fucsia", imagen: "../assets/img/otros/otros-2/dorado.webp" },
          { nombre: "Amarillo patito", imagen: "../assets/img/otros/otros-2/rojo.webp" },
          { nombre: "Amarillo oro", imagen: "../assets/img/otros/otros-2/azul.webp" },
          { nombre: "Blanco", imagen: "../assets/img/otros/otros-2/verde.webp" },
          { nombre: "Negro", imagen: "../assets/img/otros/otros-2/dorado.webp" },
          { nombre: "Perla", imagen: "../assets/img/otros/otros-2/rojo.webp" },
          { nombre: "Guindo", imagen: "../assets/img/otros/otros-2/azul.webp" },
          { nombre: "Vino", imagen: "../assets/img/otros/otros-2/verde.webp" },
        ],
      },
      "gallardetes": {
        nombre: "Gallardetes",
        imagen: "../assets/img/otros/otros-1/gallardete.jpeg",
        descripcion: "Producto bordado correspondiente a gallardetes.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/otros/otros-1/rojo.webp" }
        ],
      },
      "insignias": {
        nombre: "Insignias",
        imagen: "../assets/img/otros/otros-1/gallardete.jpeg",
        descripcion: "Producto bordado correspondiente a insignias.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/otros/otros-1/rojo.webp" }
        ],
      },
      "estandartes": {
        nombre: "Estandartes",
        imagen: "../assets/img/otros/otros-1/gallardete.jpeg",
        descripcion: "Producto bordado correspondiente a estandartes.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/otros/otros-1/rojo.webp" }
        ],
      },
      "ropa-santos": {
        nombre: "Ropa para santos",
        imagen: "../assets/img/otros/otros-1/gallardete.jpeg",
        descripcion: "Producto bordado correspondiente a ropa para santos.",
        colores: [
          { nombre: "Camote", imagen: "../assets/img/otros/otros-1/rojo.webp" }
        ],
      },
    },
  },
};

const rutasImagenesReales = {
  "bandos/modelo-1": "../assets/img/bandos/modelo-01/bandoModelo1.jpeg",
  "bandos/modelo-paloma": "../assets/img/bandos/modelo-02/bandoModelo2.jpeg",
  "bandos/modelo-pavo-gordo": "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
  "bandos/modelo-pavo-gordo-nuevo": "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
  "bandos/modelo-pavo-flaco": "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
  "bandos/modelo-pavo-extra": "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
  "bandos/modelo-pavo-doble-cola": "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
  "bandos/modelo-papagayo": "../assets/img/bandos/modelo-03/bandoModelo3.jpeg",
  "guiones/1-metro": "../assets/img/guiones/modelo-01/guionModelo1.jpeg",
  "guiones/1.1-metros": "../assets/img/guiones/modelo-01/guionModelo1.jpeg",
  "guiones/1.2-metros": "../assets/img/guiones/modelo-01/guionModelo1.jpeg",
  "mantos/pequeno": "../assets/img/mantos/pequeño/mantoPequeño.jpeg",
  "mantos/mediano": "../assets/img/mantos/mediano/mantoMediano.jpeg",
  "mantos/grande": "../assets/img/mantos/grande/mantoGrande.jpeg",
  "panos/pequeno": "../assets/img/panos/pequeño/panoPequeño.jpeg",
  "panos/mediano": "../assets/img/panos/mediano/panoMediano.jpeg",
  "panos/grande": "../assets/img/panos/grande/panoGrande.jpeg",
  "otros/otros-1": "../assets/img/otros/otros-1/gallardete.jpeg",
  "otros/otros-2": "../assets/img/otros/otros-2/banderin2.jpeg",
  "otros/gallardetes": "../assets/img/otros/otros-1/gallardete.jpeg",
  "otros/insignias": "../assets/img/otros/otros-1/gallardete.jpeg",
  "otros/estandartes": "../assets/img/otros/otros-1/gallardete.jpeg",
  "otros/ropa-santos": "../assets/img/otros/otros-1/gallardete.jpeg",
};

Object.entries(catalogo).forEach(([categoria, datosProducto]) => {
  Object.entries(datosProducto.modelos).forEach(([modelo, datosModelo]) => {
    const ruta = rutasImagenesReales[`${categoria}/${modelo}`];

    if (!ruta) {
      return;
    }

    datosModelo.imagen = ruta;
    
    // Todos los modelos ahora usarán la lista completa de colores
    const todosLosColores = Object.keys(paletaColores).map(nombreColor => ({
      nombre: nombreColor,
      imagen: generarImagenColor(nombreColor)
    }));

    datosModelo.colores = todosLosColores;
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
