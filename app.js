const open = document.querySelector(".menu");
const close = document.querySelector(".close");
const menu = document.querySelector(".mobileMenu");

open.addEventListener("click", function () {
  menu.style.right = "0";
});

close.addEventListener("click", function () {
  menu.style.right = "-100%";
});
