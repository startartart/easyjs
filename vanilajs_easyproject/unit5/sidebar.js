const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar")
    navbar.classList.toggle("navbar");
    navbar.classList.toggle("hide-navbar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  navbar.classList.toggle("navbar");
  navbar.classList.toggle("hide-navbar");
});
