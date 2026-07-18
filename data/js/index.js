const menuToggle = document.querySelector(".menu-toggle");
const navRight = document.querySelector(".nav-right");

menuToggle.addEventListener("click", () => {
  console.log("Clicked");
  navRight.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (this.nextElementSibling) {
      // This link has a submenu (Services)
      return;
    }

    navRight.classList.remove("active");
  });
});

const dropdown = document.querySelector(".dropdown > a");

dropdown.addEventListener("click", function (e) {
  if (window.innerWidth <= 992) {
    e.preventDefault();

    this.parentElement.classList.toggle("active");
  }
});
