let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

// Abrir menu e mostrar overlay
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block';
});

// Fechar menu e esconder overlay ao clicar no overlay
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
});

// Fechar menu e esconder overlay ao clicar em qualquer link do menu
const linksMenu = menu.querySelectorAll('nav ul li a');
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    });
});

// Scroll suave usando SmoothScroll
document.addEventListener("DOMContentLoaded", function () {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });
});



let translations = {};
let currentLang = 'pt';  // idioma padrão



// Função para carregar o JSON de traduções
async function loadTranslations() {
  const response = await fetch('../json/translations.json'); // ajuste o caminho
  translations = await response.json();
  applyTranslations();
}

// Função que aplica as traduções na página
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.setAttribute('placeholder', translations[currentLang][key]);
    }
  });

  document.querySelectorAll('[data-i18n-value]').forEach(el => {
    const key = el.getAttribute('data-i18n-value');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.setAttribute('value', translations[currentLang][key]);
    }
  });
}

// Função para mudar o idioma
function changeLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    applyTranslations();
  }
}

// Exemplo: criar um seletor simples para trocar idioma
function createLanguageSelector() {
  const selector = document.createElement('select');
  selector.classList.add('language-selector');
  selector.innerHTML = `
    <option value="pt">Português</option>
    <option value="en">English</option>
  `;
  selector.value = currentLang;
  selector.addEventListener('change', e => changeLanguage(e.target.value));
  document.body.prepend(selector); 
}

// Inicializa tudo
window.addEventListener('DOMContentLoaded', () => {
  loadTranslations();
  createLanguageSelector();
});
