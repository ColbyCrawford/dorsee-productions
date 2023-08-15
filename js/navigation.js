const body = document.querySelector("body");
const navMenu = document.querySelector(".navigation-menu")
const menuOpenBtn = document.getElementById("menu-open-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");
const menuItems = document.getElementsByClassName("navigation-menu-item");

let menuItemsArray = Array.from(menuItems);

menuOpenBtn.addEventListener("click", () => {
    openMenu();
})

menuCloseBtn.addEventListener("click", () => {
    closeMenu();
})

function toggleMenu() {
    body.classList.toggle('overlay-visible');
    navMenu.classList.toggle('is-open');
}

function openMenuTasks() {
    window.addEventListener("resize", windowResize);

    menuItemsArray.forEach(e => {
        e.addEventListener("click", closeMenu);
    });
}

function closeMenuTasks() {
    window.removeEventListener("resize", windowResize);

    menuItemsArray.forEach(e => {
        e.removeEventListener("click", closeMenu);
    })
}

function closeMenu() {
    toggleMenu();
    closeMenuTasks();
}

function openMenu() {
    toggleMenu();
    openMenuTasks();
}

function windowResize() {
    if (window.innerWidth > 1198.99) {
        closeMenu();
    }
}