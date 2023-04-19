// получаем кнопки вверх и вниз
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

// получаем блок .main-slide -
// собираем div'ы в блоке .main-slide
// .length - оставляет только число, полученных дивов;
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
// console.log(slidesCount); - проверка операции;

let activeSlideIndex = 0;

// изменяем положение блоков в sidebar -
// смещая их на вычисление (slidesCount - 1);
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

//
upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

// функция changeSlide(direction) для реализации смены слайдов;
function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
