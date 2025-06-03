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
