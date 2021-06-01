const menu = document.querySelector("#mobile-menu");
const links = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle('is-active')
    menu.classList.toggle('active')
} )