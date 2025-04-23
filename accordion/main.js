const container = document.querySelector(".container");
const cardList = [
  "https://i.pinimg.com/736x/4b/2d/49/4b2d49ef250e4e4be3ced8c273825ffa.jpg",
  "https://i.pinimg.com/736x/7e/49/8e/7e498e8177cc4c048a6b5dec8f2a622a.jpg",
  "https://i.pinimg.com/736x/9c/81/5c/9c815c0d65360205cba99bbd8e3b8038.jpg",
  "https://i.pinimg.com/736x/56/59/d2/5659d2dd85e51a20a2a1b3ce5bcc333d.jpg",
  "https://i.pinimg.com/736x/20/b9/41/20b941c237be1aed6efbe5e9facda4cc.jpg",
];

const setActive = (e) => {
  const el = e.target;

  if (el.classList.contains("active")) {
    el.classList.remove("active");
    return;
  }

  const active = document.querySelector(".active");
  active?.classList.remove("active");

  el.classList.add("active");
};

const createCardElement = (image) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url(${image})`;
  card.addEventListener("click", setActive);
  container.appendChild(card);
};

const displayCards = () => {
  cardList.forEach((image) => {
    createCardElement(image);
  });
};

displayCards();
