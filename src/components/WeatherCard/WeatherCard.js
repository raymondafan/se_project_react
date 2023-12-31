import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  console.log("weather card");
  const weatherOption = weatherOptions.find((item) => {
    // console.log(i);
    return item.day === day && item.type === type;
  });
  // console.log(imageSrc);
  // console.log(imageSrc[0].url);
  const imageSrcUrl = weatherOption.url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp}°F </div>
      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};
export default WeatherCard;
