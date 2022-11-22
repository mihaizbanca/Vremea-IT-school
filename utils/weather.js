function windToKmPerHour(metersPerSec) {
  return (metersPerSec * 3600) / 1000;
}

function getWeatherIcon(iconCode) {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
