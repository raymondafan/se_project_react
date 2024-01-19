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
const getAddItem = ()=>{
const itemApi = fetch()
}
//export is not default because u can add additional fxn to weatherApi
//parses data (paseWeatherData)
export const parseWeatherData = (data) => {
  const main = data.main;

  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  console.log(weather);
  return weather;
};
export const parseLocationData = (data) => {
  const name = data.name;
  const location = name;
  return location;
};

//after you get the getForecastWeather response look at data you need and make a const of the object u need in order to grab the data needed
// weather.temperature.F = `${Math.round(data.main.temp)}°F`;
// weather.temperature.C = `${Math.round((data.main.temp - 32) * 5/9)}°C`;
