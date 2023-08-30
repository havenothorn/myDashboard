const API_KEY = "9f673e84985d181d2f1c2b905365e177";

const weather = document.querySelector("#weather");

function displayWeather(data) {
  const { name } = data;
  const { description, icon } = data.weather[0];
  const { temp } = data.main;

  const weatherImg = document.createElement("img");
  weatherImg.src = `../img/icons/${icon}.png`;

  const weatherTxt = document.createElement("span");
  weatherTxt.innerText = `${description} · ${Math.round(temp)}°C `;

  const city = document.createElement("span");
  city.innerText = `· 📍 ${name}`;

  weather.appendChild(weatherImg);
  weather.appendChild(weatherTxt);
  weather.appendChild(city);
}

function onGeoOK(position) {
  const { latitude: lat, longitude: lon } = position.coords;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then(displayWeather);
}

function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
