const images = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpeg",
  "06.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
bgImage = `img/${chosenImage}`;
const bg = document.querySelector(".wrap");
bg.style.backgroundImage = `url(${bgImage})`;
