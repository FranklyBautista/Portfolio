# Portfolio · Frankly Bautista

Sitio personal de Frankly Bautista, desarrollador full-stack junior con enfoque backend. Bilingüe (español / inglés).

## Estructura

- `index.html`: el sitio (inicio, sobre mí, proyectos, contacto). El texto en español va aquí.
- `i18n.js`: textos en español e inglés para el selector de idioma.
- `main.js`: cambio de idioma (recuerda la elección y acepta `?lang=en`) y botón de CV.
- `styles.css`: estilos, con modo claro y oscuro según el sistema.

Es HTML, CSS y JavaScript sin dependencias ni paso de build.

## Verlo en local

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Tareas comunes

- **Añadir el CV:** sube el PDF (por ejemplo `assets/CV-Frankly-Bautista.pdf`) y pon esa ruta en `CV_URL` dentro de `main.js`. El botón "Descargar CV" aparece solo.
- **Cambiar un texto:** edítalo en `i18n.js` (ambos idiomas) y en `index.html` si es la versión en español.
- **Añadir un proyecto:** copia un bloque `<article class="project">` en `index.html` y añade sus claves en `i18n.js`.
