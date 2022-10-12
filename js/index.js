const buttonBar = document.querySelector(".button-menu");
const menuContainer = document.querySelector(".menu-container");
const carouselZ = document.querySelector(".carousel");

function buttonMenu(x) {
  x.classList.toggle("change");
}

buttonBar.addEventListener("click", () => {
  menuContainer.classList.toggle("menu-transition");
  carouselZ.classList.toggle("zindex");
});
