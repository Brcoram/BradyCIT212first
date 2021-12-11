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

var modal = document.getElementById("modal");
var btn = document.getElementsByClassName("modalOpen");
var span = document.getElementsByClassName("close")[0];

btn[0].onclick = function() {
  modal.style.display = "block";
};
btn[1].onclick = function() {
  modal.style.display = "block";
};
btn[2].onclick = function() {
  modal.style.display = "block";
};
btn[3].onclick = function() {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
