const API_KEY = "9f673e84985d181d2f1c2b905365e177";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather");
      const weatherImg = document.createElement("img");
      weatherImg.src = `../img/icons/${data.weather[0].icon}.png`;
      weather.prepend(weatherImg);
      const weatherTxt = weatherImg.nextElementSibling;
      weatherTxt.innerText = `${data.weather[0].description} · ${Math.round(
        data.main.temp
      )}°C `;
      const city = weather.querySelector("span:last-child");
      city.innerText = `· 📍 ${data.name}`;
    });
}
function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
