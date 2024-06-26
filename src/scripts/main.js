'use strict';

const buttonsClose = document.querySelectorAll(".button--cancel");
const buttonsAddCard = document.querySelectorAll(".addCard");
const shadow = document.querySelector(".shadow");
const formAddCard = document.getElementById("formAddCard");
const formWidthraw = document.getElementById("formWithdraw");
const formTopUp = document.getElementById("formTopUp");
const formSingUp = document.getElementById("formSingUp");
const formLogin = document.getElementById("formlogin");
const buttonsWidthraw = document.querySelectorAll(".withdraw");
const buttonsTopUp = document.querySelectorAll(".topUp");
const buttonLogin = document.getElementById("login");
const buttonSingUp = document.getElementById("singUp");
const login = document.querySelector(".login--login");
const singUp = document.querySelector(".login--singUp");



// ['Widthraw', 'TopUp', 'AddCard'].forEach(w => {
//   document.querySelectorAll(w[0].toLowerCase() + w.substring(1)).forEach(b => {
//     b.addEventListener('click', () => {
//       shadow.style.transform = "none";
//       document.getElementById(`form${w}`).style.transform = "none";
//     })
//   })
// });

buttonsWidthraw.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formWidthraw.style.transform = "none";
}));

buttonsTopUp.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formTopUp.style.transform = "none";
}));

buttonsAddCard.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formAddCard.style.transform = "none";
}))

function stopDefAction(evt) {
  evt.preventDefault();
  document.form.reset();
}

formSingUp.addEventListener(
'submit', stopDefAction, false);

formLogin.addEventListener(
'submit', stopDefAction, false);


buttonLogin.addEventListener("click", () => {
  login.style.display = "none";
});

buttonSingUp.addEventListener("click", () => {
  singUp.style.display = "none";
});


buttonsClose.forEach(btn => btn.addEventListener("click", () => {
  shadow.style.transform = "scale(0)";
  formAddCard.style.transform = "scale(0)";
  formWidthraw.style.transform = "scale(0)";
  formTopUp.style.transform = "scale(0)";
}));


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
