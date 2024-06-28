'use strict';

// window.onload = function() {
//   document.getElementById('form').addEventListener(
//     'submit', stopDefAction, false);
// };

// function stopDefAction(evt) {
//   evt.preventDefault();
//   document.form.reset();
// }

const forms = document.querySelectorAll(".form");
const buttonsClose = document.querySelectorAll(".button--cancel");
const containers = document.querySelectorAll(".offers__container");
const rollLists = document.querySelectorAll(".users__payments-roll");
const rolls = document.querySelectorAll(".users__roll");
const infos = document.querySelectorAll(".info__roll");
const downButtons = document.querySelectorAll(".buttonDown");
const addButtons = document.querySelectorAll(".offers__add-button");
const formAddTransacrion = document.getElementById("formAddTransacrion");
const formChangePayment = document.getElementById("formChangePayment");
const shadow = document.querySelector(".shadow");
const buttonsChangePayment = document.querySelectorAll(".changePayment");

['Balance', 'Notification', 'Debiting', 'Lids', 'Payment', 'Offer', 'Approve'].forEach(w => {
  document.querySelectorAll(`.edit${w}`).forEach(b => {
    b.addEventListener('click', () => {
      shadow.style.transform = "none";
      document.getElementById(`formEdit${w}`).style.transform = "none";
    })
  })
});

rolls.forEach((r, i) => r.addEventListener("click", () => {
  if (infos[i].style.display === 'block') {
    infos[i].style.display = 'none';
    r.innerHTML = 'Розгорнути';
    containers[i + 1].classList.remove('users__container--deployed')
  } else {
    infos[i].style.display = 'block';
    r.innerHTML = 'Згорнути';
    containers[i + 1].classList.add('users__container--deployed')
  }
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


buttonsChangePayment.forEach(b => b.addEventListener("click", () => {
  shadow.style.transform = "none";
  formChangePayment.style.transform = "none";
}));

buttonsClose.forEach(btn => btn.addEventListener("click", () => {
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
