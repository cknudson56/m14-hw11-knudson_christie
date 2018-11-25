"use strict";

var forecast = { "error": "404" };
var weatherWrapper = document.getElementsByClassName("span");
var currentWeather = document.createTextNode(forecast.error);
//forecast.weather[0].description
weatherWrapper.appendChild(currentWeather);