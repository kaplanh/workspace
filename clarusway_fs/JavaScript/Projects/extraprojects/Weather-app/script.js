const search = document.querySelector("button");
const cityInput = document.querySelector("input");
const container = document.querySelector("div");

const getWeatherInfo = async () => {
  if (
    container.innerHTML.toLowerCase().includes(cityInput.value.toLowerCase())
  ) {
    alert(cityInput.value + "is already exists");
  } else {
    const key = "525ec9a980c68d11748eb917c3b824c9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&APPID=${key}`;

    try {
      const response = await fetch(url);
      const weatherInfo = await response.json();
      console.log(weatherInfo);
      const { weather, main, name } = weatherInfo;
      console.log(weather, main, name);
      container.innerHTML += `${main.temp} ${name} <br>  ${weather[0].description} <br> <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" </img>`;
    } catch (error) {
      alert("There is not a city called" + cityInput);
    } finally {
      cityInput.value = "";
    }
  }
};

search.addEventListener("click", getWeatherInfo);
