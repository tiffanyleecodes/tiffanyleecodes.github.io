const open = document.querySelector(".menu");
const close = document.querySelector(".close");
const menu = document.querySelector(".mobileMenu");

open.addEventListener("click", function () {
  menu.style.right = "0";
});

close.addEventListener("click", function () {
  menu.style.right = "-100%";
});

const side = document.querySelectorAll(".Side");
const hover = document.querySelectorAll(".hover");
const link = document.querySelectorAll(".link");

for (let i = 0; i < side.length; i++) {
  side[i].addEventListener("click", function () {
    if (hover[i].style.opacity === "1") {
      return;
    }
    for (let j = 0; j < hover.length; j++) {
      hover[j].style.opacity = "0";
      link[j].style.display = "none";
    }
    hover[i].style.opacity = "1";
    link[i].style.display = "flex";
  });
}
