const Menu_email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

Menu_email.addEventListener('click', toggleDesktopMenu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}