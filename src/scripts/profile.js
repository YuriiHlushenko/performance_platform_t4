'use strict';

const buttonsClose = document.querySelectorAll(".button--cancel");
const formAddOffer = document.getElementById("formAddOffer");
const shadow = document.querySelector(".shadow");
const buttonAddOffer = document.getElementById("addOffer");

buttonAddOffer.addEventListener("click", () => {
  shadow.style.transform = "none";
  formAddOffer.style.transform = "none";
});


buttonsClose.forEach(btn => btn.addEventListener("click", () => {
  shadow.style.transform = "scale(0)";
  formAddOffer.style.transform = "scale(0)";
}));


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
