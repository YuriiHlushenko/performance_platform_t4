'use strict';

// window.onload = function() {
//   document.getElementById('form').addEventListener(
//     'submit', stopDefAction, false);
// };

// function stopDefAction(evt) {
//   evt.preventDefault();
//   document.form.reset();
// }

const buttonsClose = document.querySelectorAll(".button--cancel");
const buttonAddOffer = document.getElementById("addOffer");
const buttonEditOffer = document.getElementById("editOffer");
const shadow = document.querySelector(".shadow");
const formAddOffer = document.getElementById("formAddOffer");
const formEditOffer = document.getElementById("formEditOffer");

buttonAddOffer.addEventListener("click", () => {
  shadow.style.transform = "none";
  formAddOffer.style.transform = "none";
});

buttonEditOffer.addEventListener("click", () => {
  shadow.style.transform = "none";
  formEditOffer.style.transform = "none";
});


buttonsClose.forEach(btn => btn.addEventListener("click", () => {
  shadow.style.transform = "scale(0)";
  formAddOffer.style.transform = "scale(0)";
  formEditOffer.style.transform = "scale(0)";
}));


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
