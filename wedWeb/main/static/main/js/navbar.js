const btnMenu = document.querySelector(".open-btn");
const menu = document.querySelector(".offcanvas-menu");
const navbar = document.querySelector(".nav-filter");
const body = document.querySelector(".body")
const toggleMenu = function () {
    menu.classList.toggle("active");
    navbar.classList.toggle("show");
    navbar.classList.toggle("modal-backdrop");
    body.classList.toggle("active");
}

btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});

const removeElements = () => {
    document.getElementById("my-modal").classList.remove("active");
    document.getElementById("navbar-filter").classList.remove("show");
    document.getElementById("navbar-filter").classList.remove("modal-backdrop");
    document.getElementById("body-filter").classList.remove("active");
}

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains("active");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});

if (document.documentElement.clientWidth < 500){
    document.querySelector(".nav-pills").addEventListener("click", function() {
        removeElements();
    })
}

document.getElementById("open-model-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("active");
    document.getElementById('navbar-filter').classList.add("modal-backdrop show")
    document.getElementById("body-filter").classList.add("active");
});

document.getElementById("close-my-model-btn").addEventListener("click", function(){
    removeElements();
});

window.addEventListener('keydown', (e) => {
    if (e.key == "Escape") {
        removeElements();
    }
});