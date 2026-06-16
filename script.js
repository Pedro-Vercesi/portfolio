const toggleBtn = document.querySelector(".navbar-toggle");
const toggleIcon = document.querySelector(".navbar-toggle i");
const navbarMenu = document.querySelector(".navbar-menu");
const overlay = document.querySelector(".nav-overlay");

// Abre/cierra el menú y el overlay juntos
function toggleMenu() {
  const isOpen = navbarMenu.classList.toggle("open");
  overlay.classList.toggle("open");

  toggleIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  toggleBtn.setAttribute("aria-expanded", isOpen);
}

// Cierra todo
function closeMenu() {
  navbarMenu.classList.remove("open");
  overlay.classList.remove("open");
  toggleIcon.className = "fa-solid fa-bars";
  toggleBtn.setAttribute("aria-expanded", "false");
}

toggleBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

navbarMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
