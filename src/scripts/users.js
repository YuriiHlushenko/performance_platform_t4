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
const containers = document.querySelectorAll(".offers__container");
const rollLists = document.querySelectorAll(".users__payments-roll");
const rolls = document.querySelectorAll(".users__roll");
const infos = document.querySelectorAll(".info__roll");
const downButtons = document.querySelectorAll(".buttonDown");
const addButtons = document.querySelectorAll(".offers__add-button");
const formEditOffer = document.getElementById("formEditOffer");
const formEditPayment = document.getElementById("formEditPayment");
const formAddTransacrion = document.getElementById("formAddTransacrion");
const formChangePayment = document.getElementById("formChangePayment");
const buttonsEditOffer = document.querySelectorAll(".editOffer");
const shadow = document.querySelector(".shadow");
const buttonsEditPayment = document.querySelectorAll(".editPayment");
const buttonsChangePayment = document.querySelectorAll(".changePayment");

rolls.forEach((r, i) => r.addEventListener("click", () => {
  if (infos[i].style.display === 'block') {
    infos[i].style.display = 'none';
    // containers[i + 1].classList.remove('users__container--open');
    r.innerHTML = 'Розгорнути';
  } else {
    infos[i].style.display = 'block';
    // containers[i + 1].classList.add('users__container--open');
    r.innerHTML = 'Згорнути';
  }
}));

buttonsEditOffer.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formEditOffer.style.transform = "none";
}));

addButtons.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formAddTransacrion.style.transform = "none";
}));

downButtons.forEach((d, i) => d.addEventListener("click", () => {
  if (rollLists[i].style.display === 'none') {
    rollLists[i].style.display = "block";
    rollLists[i].style.maxHeight = "initial";

    // rollList.style.transform = "scale(1)"
    d.style.transform = "rotateX(180deg) translateX(-50%)"
  } else {
    rollLists[i].style.display = "none";
    d.style.transform = "translateX(-50%)"
  }
}));

buttonsEditPayment.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formEditPayment.style.transform = "none";
}));

buttonsChangePayment.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formChangePayment.style.transform = "none";
}));

buttonsClose.forEach(btn => btn.addEventListener("click", () => {
  shadow.style.transform = "scale(0)";
  formEditPayment.style.transform = "scale(0)";
  formChangePayment.style.transform = "scale(0)";
  formEditOffer.style.transform = "scale(0)";
  formAddTransacrion.style.transform = "scale(0)";
}));


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
