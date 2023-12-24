//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude = 44.34;
const longitude = 10.99;
const APIkey = "f7658a93d42bdc8bda8b279f2ff57616";


export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};
//export is not default because u can add additional fxn to weatherApi 
export const parseWeatherData = (data)=>{
console.log(data);
const main= data.main;
const temperature = main && main[0].temp;
console.log(temperature);
return temperature;
}

const response = {
    "coord": {
        "lon": 10.99,
        "lat": 44.34
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 50.5,
        "feels_like": 49.1,
        "temp_min": 42.87,
        "temp_max": 56.57,
        "pressure": 1013,
        "humidity": 82,
        "sea_level": 1013,
        "grnd_level": 925
    },
    "visibility": 10000,
    "wind": {
        "speed": 7.45,
        "deg": 191,
        "gust": 11.1
    },
    "clouds": {
        "all": 0
    },
    "dt": 1703382943,
    "sys": {
        "type": 1,
        "id": 6812,
        "country": "IT",
        "sunrise": 1703400598,
        "sunset": 1703432442
    },
    "timezone": 3600,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
}