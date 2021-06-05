const menu = document.querySelector("#mobile-menu");
const links = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle('is-active')
    links.classList.toggle('active')
})


window.addEventListener("hashchange", function() { scrollBy(0, -80) })