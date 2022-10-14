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

// *********************************************************

const accueilButton = document.getElementById("accueil-button");
const tarifsButton = document.getElementById("tarifs-button");
const epicerieButton = document.getElementById("epicerie-button");
const contactButton = document.getElementById("contact-button");

accueilButton.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/index.html";
});
tarifsButton.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/index.html";
});
epicerieButton.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/html/Epicerie.html";
});
contactButton.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/html/Contacts.html";
});
