'use strict';

// window.onload = function() {
//   document.getElementById('formAddChane').addEventListener(
//     'submit', stopDefAction, false);
// };

// function stopDefAction(evt) {
//   evt.preventDefault();
//   document.form.reset();
// }

const buttonsClose = document.querySelectorAll(".button--cancel");
const formAddChannel = document.getElementById("formAddChannel");
const formEditChannel = document.getElementById("formEditChannel");
const shadow = document.querySelector(".shadow");
const buttonAddChannel = document.getElementById("addChannel");
const channels = document.querySelectorAll(".offers__container");


buttonAddChannel.addEventListener("click", () => {
  shadow.style.transform = "none";
  formAddChannel.style.transform = "none";
});

buttonsClose.forEach(btn => btn.addEventListener("click", () => {
  shadow.style.transform = "scale(0)";
  formAddChannel.style.transform = "scale(0)";
  formEditChannel.style.transform = "scale(0)";
}));

channels.forEach(c => c.addEventListener("click", () => {
  shadow.style.transform = "none";
  formEditChannel.style.transform = "none";
}));


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
