let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')

})


menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Ajuste o valor conforme necessário
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});


