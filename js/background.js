const images = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpeg",
  "06.jpeg",
];

const bg = document.querySelector(".wrap");
const chosenImage = images[Math.floor(Math.random() * images.length)];
bg.style.backgroundImage = `url(img/${chosenImage})`;
