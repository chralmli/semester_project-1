const toggleMenu = document.getElementById("toggleMenu");
const navScroll = document.getElementById("navScroll");
 toggleMenu.addEventListener("click", () => {
    navScroll.classList.toggle("active");
});

const navbar = document.querySelector(".navbar-fixed");
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add("navbar-active");
    } else {
        navbar.classList.remove("navbar-active");
    }
};