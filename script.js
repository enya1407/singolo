// навигация
const navMenu = document.querySelector(".nav__list");

navMenu.addEventListener("click", event => {
  navMenu
    .querySelectorAll(".nav__link")
    .forEach(el => el.classList.remove("nav__link_active"));
  if (event.target.classList.contains("nav__link")) {
    event.target.classList.add("nav__link_active");
  }
});

// выключение телефонов
const iPhoneVertical = document.querySelector(".iPhone-vertical");
const iPhoneHorizontal = document.querySelector(".iPhone-horizontal");
const iPhoneVerticalOff = document.querySelector(".iPhone-vertical__off");
const iPhoneHorizontalOff = document.querySelector(".iPhone-horizontal__off");

iPhoneVertical.onclick = function() {
  const style = window.getComputedStyle(iPhoneVerticalOff);
  const { display } = style;
  // const display = style.display;
  console.log(iPhoneVerticalOff.style);
  if (display === "none") {
    iPhoneVerticalOff.style.display = "block";
  } else if (display === "block") {
    iPhoneVerticalOff.style.display = "none";
  }
};

iPhoneHorizontal.onclick = function() {
  if (iPhoneHorizontalOff.style.display === "none") {
    iPhoneHorizontalOff.style.display = "block";
  }
};

// переключение слайдера
let buttonLeft = document.querySelector(".button-left");
let buttonRight = document.querySelector(".button-right");
let slider = document.querySelectorAll(".slider");
let i = 0;

buttonLeft.onclick = function() {
  slider[i].style.display = "none";
  i++;
  if (i >= slider.length) {
    i = 0;
  }
  slider[i].style.display = "flex";
};

buttonRight.onclick = function() {
  slider[i].style.display = "none";
  i++;
  if (i >= slider.length) {
    i = 0;
  }
  slider[i].style.display = "flex";
};

// портфолио меню

const portfolioMenu = document.querySelector(".portfolio__list");
const portfolioImgs = document.querySelectorAll(".portfolio__img_order");

function shuffleImages() {
  portfolioImgs.forEach(el => {
    el.style.order = "Math.floor(Math.random()*12)";
  });
}
portfolioMenu.addEventListener("click", event => {
  portfolioMenu
    .querySelectorAll(".portfolio__link")
    .forEach(el => el.classList.remove("portfolio__link_active"));

  if (event.target.classList.contains("portfolio__link")) {
    event.target.classList.add("portfolio__link_active");
    shuffleImages();
  }
});

// рамки картинкам
const borderOn = document.querySelector(".portfolio__img-container");

borderOn.addEventListener("click", event => {
  borderOn
    .querySelectorAll(".portfolio__img")
    .forEach(el => el.classList.remove("portfolio__img_active"));
  if (event.target.classList.contains("portfolio__img")) {
    event.target.classList.add("portfolio__img_active");
  }
});

// отправка формы