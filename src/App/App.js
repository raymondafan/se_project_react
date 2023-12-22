import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import {  useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
function App() {
  const weatherTemp = "200°F";
  const [activeModal, setActiveModal] = useState(""); //argument in useState() defines default value of active modal when app() is rendered
  const [selectedCard, setSelectedCard] = useState({});
  //each card from defaultClothingItems is an object, empty object is how we define our useState()
  //empty object prevents issues like code breaking bc we traverse thru object to find indvdl data values(name, weather, link) so we wanna make sure JS doesnt have any issues by having empty object for defaultClothingItems
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
  console.log(selectedCard);
  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm onClose={handleCloseModal} title="New Garment">
          <label>
            Name
            <input type="text" name="name" minLength="1" maxLength="30" />
          </label>
          <label>
            Image
            <input type="url" name="link" minLength="1" maxLength="30" />
          </label>
          <p>Select the weather type:</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && <ItemModal selectedCard={selectedCard} onClose={handleCloseModal}/>}
    </div>
  );
}

export default App;
