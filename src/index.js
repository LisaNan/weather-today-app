function showCurrentWeather(response) {
  let cityElement = document.querySelector("#current-city");
  let currentTemperatureElement = document.querySelector(
    "#current-temperature"
  );
  let temperature = Math.round(response.data.temperature.current);

  cityElement.innerHTML = response.data.city;
  currentTemperatureElement.innerHTML = temperature;
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
