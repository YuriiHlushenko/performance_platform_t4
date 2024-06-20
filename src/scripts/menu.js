'use strict';

const href = window.location.href;
const items = document.querySelectorAll(".menu__link");

const list = ["manager", "users", "chanels", "offers", "profile", "balance", "support"];

for (let i = 0; i < list.length; i++) {
  if (href.includes(list[i])) {
      items[i + 1].classList.add('menu__link--active')
    }
}

const page = document.querySelector('.page');
const switcher = document.querySelector('.header__switcher');

// const theme = localStorage.getItem("theme");

// if (theme && theme === 'dark') {
//   page.classList.add('page--theme-dark');
// }

// switcher.addEventListener('click', ()=> {
//   if (page.classList.contains('page--theme-dark')) {
//     page.classList.remove('page--theme-dark');
//     localStorage.setItem("theme", "light");
//   } else {
//     page.classList.add('page--theme-dark');
//     localStorage.setItem("theme", "dark");
//   }
// })
