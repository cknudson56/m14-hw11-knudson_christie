let forecast = {
    "coord": {
        "lon": -93.29,
        "lat": 44.88
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 267.99,
        "pressure": 1019,
        "humidity": 56,
        "temp_min": 266.95,
        "temp_max": 269.15
    },
    "visibility": 16093,
    "wind": {
        "speed": 6.2,
        "deg": 320,
        "gust": 7.7
    },
    "clouds": {
        "all": 75
    },
    "dt": 1543259700,
    "sys": {
        "type": 1,
        "id": 1570,
        "message": 0.0025,
        "country": "US",
        "sunrise": 1543238752,
        "sunset": 1543271721
    },
    "id": 5037649,
    "name": "Minneapolis",
    "cod": 200
};
const weatherWrapper = document.getElementsByClassName("weatherspan");
const currentWeather = document.createTextNode(forecast.weather[0].description);
weatherWrapper.appendChild(currentWeather);
console.log(currentWeather);
console.log(weatherWrapper);
