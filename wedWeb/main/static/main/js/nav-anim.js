window.onscroll = function showHeader() {
    let header = document.querySelector('nav');

    if (window.scrollY > 800) {
        header.classList.add('nav-position');
    }
    else {
        header.classList.remove('nav-position');
    }
}