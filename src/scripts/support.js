'use strict';
const downButtons = document.querySelectorAll(".support__item-button");
const more = document.querySelectorAll(".support__item-more");

downButtons.forEach((d, i) => d.addEventListener("click", () => {
  if (more[i].style.display === 'none') {
    more[i].style.display = "block";
    more[i].style.maxHeight = "initial";

    // rollList.style.transform = "scale(1)"
    d.style.transform = "rotateX(180deg)"
  } else {
    more[i].style.display = "none";
    d.style.transform = "none"
  }
}));

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
