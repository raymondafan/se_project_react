import { defaultClothingItems } from "../util/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";

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

  return (
    <main className="main">
      <WeatherCard day={false} type="cloud" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card_items">
          {defaultClothingItems.map((item) => {
            console.log(item);
            return <ItemCard item={item} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </main>
  );
}
export default Main;
