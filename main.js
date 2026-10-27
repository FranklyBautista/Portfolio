// Ruta del CV. Cuando subas el PDF (por ejemplo a assets/CV-Frankly-Bautista.pdf),
// pon aquí la ruta y el botón "Descargar CV" aparecerá solo.
const CV_URL = null;

const STORAGE_KEY = "lang";

function getInitialLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (fromUrl === "es" || fromUrl === "en") return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch (_) {}
  return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
}

function setLang(lang) {
  const dict = window.I18N[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.title = dict["meta.title"];
  document.querySelector('meta[name="description"]').setAttribute("content", dict["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });
  document.querySelectorAll("[data-i18n-label]").forEach((el) => {
    const text = dict[el.dataset.i18nLabel];
    if (text !== undefined) el.setAttribute("aria-label", text);
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (_) {}
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

if (CV_URL) {
  const cv = document.getElementById("cv-link");
  cv.href = CV_URL;
  cv.hidden = false;
}

document.getElementById("year").textContent = new Date().getFullYear();

setLang(getInitialLang());
