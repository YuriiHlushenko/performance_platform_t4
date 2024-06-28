'use strict';

const buttonsClose = document.querySelectorAll(".button--cancel");
const formAddChanel = document.getElementById("formAddChannel");
const shadow = document.querySelector(".shadow");
const buttonAddChanel = document.getElementById("addChannel");
const forms = document.querySelectorAll(".form");
const buttonsEditChanel = document.querySelectorAll(".editOffer");
const buttonEditProfile = document.getElementById("editProfile");
const buttonDeleteProfile = document.getElementById("deleteProfile");

const formEditProfile = document.getElementById("formEditProfile");
const formEditChanel = document.getElementById("formEditChannel");
const formDeleteProfile = document.getElementById("formDeleteProfile");

buttonAddChanel.addEventListener("click", () => {
  shadow.style.transform = "none";
  formAddChanel.style.transform = "none";
});

buttonsEditChanel.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formEditChanel.style.transform = "none";
}));


buttonEditProfile.addEventListener("click", () => {
  shadow.style.transform = "none";
  formEditProfile.style.transform = "none";
});

buttonDeleteProfile.addEventListener("click", () => {
  shadow.style.transform = "none";
  formDeleteProfile.style.transform = "none";
  formDeleteProfile.addEventListener("click", () => {
      shadow.style.transform = "scale(0)";
      formDeleteProfile.style.transform = "scale(0)";
})});

buttonsClose.forEach(btn => btn.addEventListener("click", () => {
  shadow.style.transform = "scale(0)";
  forms.forEach(f => f.style.transform = "scale(0)")
}));

buttonAddChanel.addEventListener("click", () => {
  shadow.style.transform = "none";
  formAddChanel.style.transform = "none";
});

buttonsClose.forEach(btn => btn.addEventListener("click", () => {
  shadow.style.transform = "scale(0)";
  formAddChanel.style.transform = "scale(0)";
}));


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
