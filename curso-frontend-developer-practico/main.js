const Menu_email = document.querySelector('.navbar-email');
const Desktop_menu = document.querySelector('.desktop-menu');
const Hamburguer_menu = document.querySelector('.menu');
const Mobile_menu = document.querySelector('.mobile-menu');
const Carrito_menu = document.querySelector('.product-detail');
const Carrito_icon_menu = document.querySelector('.navbar-shopping-cart');


Menu_email.addEventListener('click', toggleDesktop_menu);
Hamburguer_menu.addEventListener('click', togglMobile_menu);
Carrito_icon_menu.addEventListener('click', toggleCarrito_menu);

function toggleDesktop_menu(){
    const Mobile_carrito_closed = Carrito_menu.classList.contains('inactive');

    if(!Mobile_carrito_closed){
        Carrito_menu.classList.add("inactive");
    }

    Desktop_menu.classList.toggle('inactive');
}

function togglMobile_menu(){

    const Mobile_carrito_closed = Carrito_menu.classList.contains('inactive');

    if(!Mobile_carrito_closed){
        Carrito_menu.classList.add("inactive");
    }

    Mobile_menu.classList.toggle("inactive");
}

function toggleCarrito_menu(){

    const Mobile_menu_closed = Mobile_menu.classList.contains('inactive');
    const Desktop_menu_open = Desktop_menu.classList.contains('inactice');

    if(!Mobile_menu_closed){
        Mobile_menu.classList.add("inactive");
    }

    if(!Desktop_menu_open){
        Desktop_menu.classList.add("inactive");
    }

    Carrito_menu.classList.toggle('inactive');
}