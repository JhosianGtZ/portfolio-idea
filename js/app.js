function changeBackground() {

    var nav__menu = document.getElementById("menu-nav");
    var scrollValue = window.scrollY;


    if (scrollValue < 20) {
        nav__menu.classList.remove('menu-bg');
    } else {
        nav__menu.classList.add('menu-bg');
    }
}


window.addEventListener('scroll', changeBackground);