function showCurrentWeather(response) {
  function showCelsiusTemperature() {
    currentTemperatureElement.innerHTML = temperature;
    celsius.style.color = "#000000";
    fahrenheit.style.color = "#a9a8b5";
  }

  function showFahrenheitTemperature() {
    currentTemperatureElement.innerHTML = Math.round(
      (temperature * 9) / 5 + 32
    );
    celsius.style.color = "#a9a8b5";
    fahrenheit.style.color = "#000000";
  }

  let cityElement = document.querySelector("#current-city");
  let currentTemperatureElement = document.querySelector(
    "#current-temperature"
  );
  let temperature = Math.round(response.data.temperature.current);
  let celsius = document.querySelector("#current-temperature-celsius");
  celsius.addEventListener("click", showCelsiusTemperature);
  let fahrenheit = document.querySelector("#current-temperature-fahrenheit");
  fahrenheit.addEventListener("click", showFahrenheitTemperature);
  let descriptionElement = document.querySelector(
    "#current-weather-description"
  );
  let humidityElement = document.querySelector("#current-weather-humidity");
  let windSpeedElement = document.querySelector("#current-weather-windspeed");
  let windSpeed = Math.round(response.data.wind.speed);
  let timeElement = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#current-temperature-icon");

  cityElement.innerHTML = response.data.city;
  currentTemperatureElement.innerHTML = temperature;
  celsius.style.color = "#000000";
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${windSpeed}km/h`;
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img
        src="${response.data.condition.icon_url}"
        alt="weather description icon"
        class="current-temperature-icon"
      />`;
}

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let formattedHours = String(hours).padStart(2, "0");
  let minutes = date.getMinutes();
  let formattedMinutes = String(minutes).padStart(2, "0");

  return `${day} ${formattedHours}:${formattedMinutes}`;
}

function searchCity(city) {
  let apiKey = "beac6ctb368bo560b6dfbc1164f16438";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showCurrentWeather);
}

function runCitySearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-text-input");

  searchCity(searchInput.value);
}

let citySearchFormElement = document.querySelector("#city-search-form");
citySearchFormElement.addEventListener("submit", runCitySearchSubmit);

searchCity("Halifax");
