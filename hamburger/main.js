document.querySelector(".hamburger").addEventListener("click", mobileMenu);
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
}

function closeMenu() {
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector(".nav-menu").classList.remove("active");
}
