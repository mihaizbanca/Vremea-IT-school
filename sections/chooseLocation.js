const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");
const cluj = document.querySelector(".cluj");
const iasi = document.querySelector(".iasi");
const user = document.querySelector(".user");

function updateCityDisplay(city) {
  const currentCity = document.getElementById("current-city");
  currentCity.innerHTML = capitalizeFirstLetter(city) + ".";
}

function updateCity(city) {
  // updatam orasul afisat
  updateCityDisplay(city);
  // salveaza orasul in localStorage
  localStorage.setItem("city", city);

  // afisam noile date pentru vremea curenta de la api
  displayCurrentWeather(city);

  // afisam noile date pentru prognoza
  displayWeatherForecast(city);
}

bucharest.addEventListener("click", function () {
  updateCity("București");
});

timisoara.addEventListener("click", function () {
  updateCity("Timișoara");
});

oradea.addEventListener("click", function () {
  updateCity("Oradea");
});

cluj.addEventListener("click", function () {
  updateCity("Cluj-Napoca");
});

iasi.addEventListener("click", function () {
  updateCity("Iași");
});

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

user.addEventListener("click", function () {
  let userCity = prompt("Introdu numele orasului tau: ");
  // capitalizeFirstLetter(userCity);
  console.log(userCity);
  updateCity(userCity);
});
