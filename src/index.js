function runCitySearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-text-input");
  let city = document.querySelector("#current-city");
  city.innerHTML = searchInput.value;
}

let citySearchFormElement = document.querySelector("#city-search-form");
citySearchFormElement.addEventListener("submit", runCitySearchSubmit);
