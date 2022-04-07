// navegacion Menu
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

btnMenu.addEventListener('click', (event) => {

  //Icon X botton
barIconX.classList.toggle('fa-times');

if(activador){
    menu.style.left = '0%'; 
    menu.style.transition = '0.5s';

    activador = false;
}
else{
    activador = false;
    menu.style.left = '-100%';

    activador = true;
}

});

//moverse en los submenus de navegacion
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach( (Element) => {

    Element.addEventListener('click',(event) => {

        enlaces.forEach((link) => {

            link.classList.remove('activo');
        });
        event.target.classList.add('activo');
    });
});

// // efectos scroll ocultar menu cuando bajamos
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {

  //Hide & Show - Scroll Menu (Function)
let currentScrollPos = window.pageYOffset;

if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
}else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
}
prevScrollPos = currentScrollPos;


//Mostrar y ocultar scroll Stilos)
let arriba = window.pageYOffset;

if(arriba <= 600){
menuContent.style.borderBottom = 'none';

  //boton arriba
goTop.style.right = '-100px';
}else{
menuContent.style.borderBottom = '3px solid #ff2e63';

  //Mostrar boton arriba
goTop.style.right = '0';
goTop.style.transition = '0.5s';

}

}

//ir arriba
goTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//ir abajo
let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
    document.body.scrollTop = 800;
    document.documentElement.scrollTop = 4750;
    
});

// Ocultar menu de navegacion en modo responsive
// const menulink = document.querySelectorAll(".menu a[href^='#']");

// menulink.forEach(menulink => {
//     menulink.addEventListener("click", fuction() {
//         menu.classList.remove("menu_opened");
//     };
// });

