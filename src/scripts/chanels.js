'use strict';

window.onload = function() {
  document.getElementById('formAddChane').addEventListener(
    'submit', stopDefAction, false);
};

function stopDefAction(evt) {
  evt.preventDefault();
  document.form.reset();
}

const buttonsClose = document.querySelectorAll(".button--cancel");
const formAddChanel = document.getElementById("formAddChanel");
const shadow = document.querySelector(".shadow");
const buttonAddChanel = document.getElementById("addChanel");


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
