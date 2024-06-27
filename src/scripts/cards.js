"use strict";

const slider = document.querySelector(".main__slider");
const sliderLine = document.querySelector(".main__cards");
const cards = document.querySelectorAll(".main__cards-container");

let current = 0;

function scale() {
  cards.forEach((c) => {
    c.style.transform = "scale(0.9)";
    c.style.width = '55vw';
  });
  cards[current].style.width = '68vw';
  cards[current].style.transform = 'none';
}

scale();

function scroll() {
  sliderLine.style.transform = `translateX(-${
    cards[current].offsetWidth * current
  }px)`;
  scale();
}

const nextSlide = () => {
  if (current < cards.length) {
    current++;

    scroll();
  }

  console.log(cards[0].offsetWidth);
};

const prevSlide = () => {
  if (current > 0) {
    current--;

    scroll();
  }
};

// navDots.forEach((dot, i) =>
//   dot.addEventListener("click", () => {
//     sliderLine.style.transform = `translateX(-${transform[i]}%)`;
//     current = i;

//     checkActiveDot();
//     checkActiveButton();
//   })
// );

let xDown = null;
let yDown = null;

function getTouches(evt) {
  return evt.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];

  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = evt.touches[0].clientX;
  const yUp = evt.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  } else if (yDiff > 0) {
    return;
  }

  xDown = null;
  yDown = null;
}

// next.addEventListener("click", nextSlide);

slider.addEventListener("touchstart", handleTouchStart, { passive: true });
slider.addEventListener("touchmove", handleTouchMove, { passive: true });
