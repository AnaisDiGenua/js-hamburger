const pulsanteApertura = document.querySelector('.fa-bars');

const hamburgerMenu = document.querySelector('.hamburger-menu');


// aggiunta classe active al click
pulsanteApertura.addEventListener("click", function(){
    hamburgerMenu.className += ' active';
})




const pulsanteChiusura = document.querySelector('.fa-times');

// aggiunto evento alla classe close e sovrascrittura della classe active
pulsanteChiusura.addEventListener("click", function(){
    hamburgerMenu.className += 'close';
})