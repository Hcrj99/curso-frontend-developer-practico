const Menu_email = document.querySelector('.navbar-email');
const Desktop_menu = document.querySelector('.desktop-menu');
const Hamburguer_menu = document.querySelector('.menu');
const Mobile_menu = document.querySelector('.mobile-menu');


Menu_email.addEventListener('click', toggleDesktop_menu);
Hamburguer_menu.addEventListener('click', togglMobile_menu);

function toggleDesktop_menu(){
    Desktop_menu.classList.toggle('inactive');
}

function togglMobile_menu(){
    Mobile_menu.classList.toggle("inactive");
}