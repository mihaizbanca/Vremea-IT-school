function displayWeatherForecast(city) {
  const forecastEndpoint = getForecastEndpoint(city);

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Din datele venite, ne intereseaza doar list, care e un array.
      const { list } = data;

      // Inainte sa afisam noile informatii, le stergem de pe ecran pe cele vechi.
      const weatherForecastElement =
        document.querySelector(".weather-forecast");
      weatherForecastElement.innerHTML = "";

      const daysMap = {};

      list.forEach((element) => {
        const { dt } = element;

        const day = getDayOfWeek(dt);

        if (daysMap[day]) {
          daysMap[day].push(element);
        } else {
          daysMap[day] = [element];
        }
      });

      for (key in daysMap) {
        weatherForecastElement.innerHTML += `<h3 class="text-primary">${key}</h3>`;

        const days = daysMap[key];

        days.forEach((element) => {
          const { dt, main, weather } = element;

          const hour = getHour(dt);

          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);

          const weatherDescription = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          weatherForecastElement.innerHTML += `
        <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 m-3"> 
            <div>
                <div>${hour}</div>
            </div>
            <div><img src=${weatherIcon} alt="" /></div>
            <div><strong>${temperature}°C</strong></div>
            <div>${weatherDescription}</div>
            <div>Real Feel: ${realFeel} °C</div>
        </div>
        `;
        });
      }

      //   // Iteram prin list.
      //   list.forEach((element) => {
      //     const { dt, main, weather } = element;

      //     const day = getDayOfWeek(dt);
      //     const hour = getHour(dt);

      //     const temperature = Math.round(main.temp);
      //     const realFeel = Math.round(main.feels_like);

      //     const weatherDescription = weather[0].description;
      //     const weatherIcon = getWeatherIcon(weather[0].icon);

      //     weatherForecastElement.innerHTML += `
      //     <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center">
      //         <div>
      //             <div><strong>${day}</strong></div>
      //             <div>${hour}</div>
      //         </div>
      //         <div><img src=${weatherIcon} alt="" /></div>
      //         <div><strong>${temperature}°C</strong></div>
      //         <div>${weatherDescription}</div>
      //         <div>Real Feel: ${realFeel} °C</div>
      //     </div>
      //     `;
      //   });
    });
}
