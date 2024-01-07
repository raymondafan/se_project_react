import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";
import "./Main.css";
function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    } //useMemo() is a value not a fxn, weatherType will always be ready and declared
    //so we dont have to call it every single time 
    //add dependancy [] which is weatherTemp
  },[weatherTemp]); 
  //if weatherTemp were to change when you didnt refresh, it will update all the data and return the new weatherType
console.log(weatherType);
//we want to filter the card prior to the mapping of the card into UI 
const filteredCards = defaultClothingItems.filter((item)=>{
  console.log(item);
  return item.weather.toLowerCase()===weatherType
}) //compares the item inserted converts anything to lowercases and compares to weathertype which in default is lowercase
console.log(filteredCards);

  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        Today is {weatherTemp}°F / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => {
            console.log(item);
            return <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </main>
  );
}
export default Main;
