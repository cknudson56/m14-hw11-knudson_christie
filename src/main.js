let forecast = {"error": "404"};
const weatherWrapper = document.getElementsByClassName("span");
const currentWeather = document.createTextNode(forecast.error);
//forecast.weather[0].description
weatherWrapper.appendChild(currentWeather);