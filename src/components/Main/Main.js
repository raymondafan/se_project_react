import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
function Main({ weatherTemp, onSelectCard }) {
  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext)
  console.log(currentTemperatureUnit);
   const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 8598
  const weatherType = useMemo(() => {
   
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    } //useMemo() is a value not a fxn, weatherType will always be ready and declared
    //so we dont have to call it every single time
    //add dependancy [] which is weatherTemp
  }, [weatherTemp]);
  //if weatherTemp were to change when you didnt refresh, it will update all the data and return the new weatherType
 
  //we want to filter the card prior to the mapping of the card into UI
  const filteredCards = defaultClothingItems.filter((item) => {
 
    return item.weather.toLowerCase() === weatherType;
  }); //compares the item inserted converts anything to lowercases and compares to weathertype which in default is lowercase


  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={temp} />
      <section className="card__section" id="card-section">
        Today is {temp}°F / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => {
            console.log(item);
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
export default Main;
