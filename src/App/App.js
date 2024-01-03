import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
  parseLocationData,
} from "../util/weatherApi";
function App() {
  const [activeModal, setActiveModal] = useState(""); //argument in useState() defines default value of active modal when app() is rendered
  const [selectedCard, setSelectedCard] = useState({});
  //each card from defaultClothingItems is an object, empty object is how we define our useState()
  //empty object prevents issues like code breaking bc we traverse thru object to find indvdl data values(name, weather, link) so we wanna make sure JS doesnt have any issues by having empty object for defaultClothingItems
  const [temp, setTemp] = useState(0);
  //bc it is going to be a number, we can use 0 bc value is consistently a number
  //so we wanna initialize temp variable as a number
  const [loc, setLoc] = useState("");
  const handleCreateModal = () => {
    setActiveModal("create"); //opens the modal
  };
  const handleCloseModal = () => {
    setActiveModal(""); //empty string bc we wanna go back to initial state (useState("")) so nothing appears after clicked
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    getForecastWeather().then((data) => {
      console.log(data);
      const temperature = parseWeatherData(data);
      setTemp(temperature);
      const location = parseLocationData(data);
      setLoc(location);
    });
  }, []);
  console.log(temp);
  console.log(loc);
  //useEffect() is the side Effect that runs after react fucntionalities have finished running
  //good place to call Api bc app has completely rendered now u have to call api to populate with data
  //empty skeleton need to populate skeleton with data thats where useEffect us effective
  return (
    <div>
      <Header
        onCreateModal={handleCreateModal}
        currentDate={currentDate}
        weatherLocation={loc}
      />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm onClose={handleCloseModal} title="New Garment">
          <label className="modal__label">
            Name
            <input
            className="modal__input"
              type="text"
              placeholder="name"
              name="name"
              minLength="1"
              maxLength="30"
            />
          </label>
          <label className="modal__label">
            Image
            <input 
            className="modal__input"
              type="url"
              placeholder="image URL"
              name="link"
              minLength="1"
              maxLength="30"
            />
          </label>

          <p className="modal__radio-title">Select the weather type:</p>
          <div className="modal__radio-input">
            <div className="modal__radio-input-hot" >
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div className="modal__radio-input-warm">
              <input  type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
            <div  className="modal__radio-input-cold">
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
