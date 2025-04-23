const carousel = document.querySelector("#carousel");
const images = document.querySelectorAll("img");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
let currentIndex = 0;

const changeImage = () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
};

setInterval(changeImage, 3000)