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
const iPhoneVertical = document.querySelector(".iPhone-vertical__click");
const iPhoneHorizontal = document.querySelector(".iPhone-horizontal__click");
const iPhoneVerticalOff = document.querySelector(".iPhone-vertical__off");
const iPhoneHorizontalOff = document.querySelector(".iPhone-horizontal__off");

iPhoneVertical.onclick = function() {
  const style = window.getComputedStyle(iPhoneVerticalOff);
  const { display } = style;
  // const display = style.display;
  if (display === "none") {
    iPhoneVerticalOff.style.display = "block";
  } else if (display === "block") {
    iPhoneVerticalOff.style.display = "none";
  }
};

iPhoneHorizontal.onclick = function() {
  const style = window.getComputedStyle(iPhoneHorizontalOff);
  const { display } = style;
  if (display === "none") {
    iPhoneHorizontalOff.style.display = "block";
  } else if (display === "block") {
    iPhoneHorizontalOff.style.display = "none";
  }
};

// переключение слайдера
// let buttonLeft = document.querySelector(".button-left");
// let buttonRight = document.querySelector(".button-right");
// let slider = document.querySelectorAll(".slider");
// let i = 0;

// buttonLeft.onclick = function() {
//   slider[i].style.display = "none";
//   i++;
//   if (i >= slider.length) {
//     i = 0;
//   }
//   slider[i].style.display = "flex";
// };

// buttonRight.onclick = function() {
//   slider[i].style.display = "none";
//   i++;
//   if (i >= slider.length) {
//     i = 0;
//   }
//   slider[i].style.display = "flex";
// };

let items = document.querySelectorAll(".slider");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("slider_active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("next", direction);
    this.classList.add("slider_active");
    isEnabled = true;
  });
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}
document.querySelector(".button-left").addEventListener("click", function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector(".button-right").addEventListener("click", function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

// портфолио меню

const portfolioMenu = document.querySelector(".portfolio__list");
const portfolioImgs = document.querySelectorAll(".portfolio__img_order");

function shuffleImages() {
  portfolioImgs.forEach(el => {
    el.style.order = Math.floor(Math.random() * 12);
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

const button = document.querySelector(".btn");
const close_button = document.querySelector(".close-btn");

button.addEventListener("click", event => {
  const subject = document.getElementById("subject").value.toString();
  const description = document.getElementById("description").value.toString();
  const name = document.getElementById("name").value.toString();
  const email = document.getElementById("email").value.toString();

  if (name && email) {
    event.preventDefault();
    if (subject) {
      document.getElementById("result-subject").innerText = `Тема: ${subject}`;
    } else {
      document.getElementById("result-subject").innerText = `Без темы`;
    }

    if (description) {
      document.getElementById(
        "result-description",
      ).innerText = `Описание: ${description}`;
    } else {
      document.getElementById("result-description").innerText = `Без описания`;
    }

    document.getElementById("message-block").classList.remove("hidden");
  }
});

close_button.addEventListener("click", () => {
  document.getElementById("result-subject").innerText = "";
  document.getElementById("result-description").innerText = "";
  document.getElementById("message-block").classList.add("hidden");
});