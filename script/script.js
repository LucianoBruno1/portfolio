function abrirDialog(id) {
    var modal = document.getElementById(id);
    modal.showModal();
}


let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () =>{
    menu.classList.add('abrir-menu');
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu');
})
overlay.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu');
})

document.addEventListener("DOMContentLoaded", function () {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800, 
        speedAsDuration: true
    });
    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
