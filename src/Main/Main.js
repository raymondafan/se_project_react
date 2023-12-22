import { defaultClothingItems } from "../util/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({weatherTemp, onSelectCard}){
    return <main className="main">
      <WeatherCard day={false} type="cloud" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card_items">
          {defaultClothingItems.map((item) => {
            console.log(item);
            return <ItemCard item={item} onSelectCard={onSelectCard}/>;
          })}
        </div>
      </section>
    </main>;
  }
export default Main;