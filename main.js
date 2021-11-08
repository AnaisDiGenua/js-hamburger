const pulsante = document.querySelector('.fa-bars');

const hamburgerMenu = document.querySelector('.hamburger-menu');


// aggiunta classe active al click
pulsante.addEventListener("click", function(){
    hamburgerMenu.className += ' active';
})