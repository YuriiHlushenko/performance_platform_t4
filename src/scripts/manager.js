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
const forms = document.querySelectorAll(".form");
const buttonAddOffer = document.getElementById("addOffer");
const buttonEditOffer = document.getElementById("editOffer");
const buttonEditProfile = document.getElementById("editProfile");
const buttonDeleteProfile = document.getElementById("deleteProfile");
const shadow = document.querySelector(".shadow");
const formAddOffer = document.getElementById("formAddOffer");
const formEditProfile = document.getElementById("formEditProfile");
const formDeleteProfile = document.getElementById("formDeleteProfile");

buttonAddOffer.addEventListener("click", () => {
  shadow.style.transform = "none";
  formAddOffer.style.transform = "none";
});

buttonEditOffer.addEventListener("click", () => {
  shadow.style.transform = "none";
  formEditOffer.style.transform = "none";
});

buttonEditOffer.addEventListener("click", () => {
  shadow.style.transform = "none";
  formEditOffer.style.transform = "none";
});

buttonEditProfile.addEventListener("click", () => {
  shadow.style.transform = "none";
  formEditProfile.style.transform = "none";
});

buttonDeleteProfile.addEventListener("click", () => {
  shadow.style.transform = "none";
  formDeleteProfile.style.transform = "none";
});

buttonsClose.forEach(btn => btn.addEventListener("click", () => {
  shadow.style.transform = "scale(0)";
  forms.forEach(f => f.style.transform = "scale(0)")
}));

forms.forEach(btn => btn.addEventListener("click", () => {
  shadow.style.transform = "scale(0)";
  forms.forEach(f => f.style.transform = "scale(0)")
}));


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
