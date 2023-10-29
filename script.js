//Navbarfix
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedMap = header.offsetTop

    if(window.pageYOffset > fixedMap) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

//HAmburger
const  hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
});