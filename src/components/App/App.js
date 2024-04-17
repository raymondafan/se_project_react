import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import auth from "../../utils/auth";
import Profile from "../Profile/Profile";
import { useEffect, useState, React } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
  parseLocationData,
} from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import api from "../../utils/api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { handleToken, getToken } from "../../utils/token";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { removeToken } from "../../utils/token";
function App() {
  const [activeModal, setActiveModal] = useState(""); //argument in useState() defines default value of active modal when app() is rendered
  const [selectedCard, setSelectedCard] = useState({});
  //each card from defaultClothingItems is an object, empty object is how we define our useState()
  //empty object prevents issues like code breaking bc we traverse thru object to find indvdl data values(name, weather, link) so we wanna make sure JS doesnt have any issues by having empty object for defaultClothingItems
  const [temp, setTemp] = useState(0);
  //bc it is going to be a number, we can use 0 bc value is consistently a number
  //so we wanna initialize temp variable as a number
  const [loc, setLoc] = useState("");
  const [clothingItems, setClothingItems] = useState([]);
  const [userData, setUserData] = useState({ email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  const history = useHistory();
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
  const handleRegisterModal = () => {
    setActiveModal("signup");
  };
  const handleLoginModal = () => {
    setActiveModal("login");
  };
  const handleEditProfileModal = () => {
    setActiveModal("edit");
  };
  const handleAddItemSubmit = (item) => {
    console.log(item);
    api
      .addItem(item, getToken())
      .then((newItem) => {
        setClothingItems([newItem.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleDeleteCard = (card) => {
    api
      .removeItem(card._id, getToken())
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id != card._id)
        );
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRegisterModalSubmit = (user) => {
    auth
      .signUp(user)
      .then(() => {
        return auth.signIn(user);
      })
      .then((data) => {
        if (data.token) {
          handleToken(data.token);
          return auth.getUserInfo(getToken());
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        history.push("/profile");
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleLoginModalSubmit = (user) => {
    auth
      .signIn(user)
      .then((data) => {
        if (data.token) {
          handleToken(data.token);
          return auth.getUserInfo(getToken());
        }
      })
      .then((userData) => {
        debugger;
        setCurrentUser(userData);
        setIsLoggedIn(true);
        handleCloseModal();
        history.push("/profile");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleLogOutSubmit = (user) => {
    setCurrentUser(true);
    removeToken(user);
    history.push("/");
    setIsLoggedIn(false);
  };
  const handleEditProfileModalSubmit = (user) => {
    auth
      .updateProfile(getToken(), user)
      .then((res) => {
        setCurrentUser(res.data);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    return !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) => {
              return cards.map((item) => {
                return item._id === id ? updatedCard.data : item;
              });
            });
          });
  };

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  // const onAddItem = (values) => {
  //   console.log(values);
  // };

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    auth
      .getUserInfo(jwt)
      .then(({ email, name, avatar, _id }) => {
        setIsLoggedIn(true);
        setCurrentUser({ name, avatar, email, _id });
        setUserData({ email });
        history.push("/profile");
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        console.log(temperature);
        setTemp(temperature);
        const location = parseLocationData(data);
        setLoc(location);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    api
      .getItemList()
      .then((items) => {
        setClothingItems(items);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (!activeModal) {
      return;
    }
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [activeModal]);

  //useEffect() is the side Effect that runs after react fucntionalities have finished running
  //good place to call Api bc app has completely rendered now u have to call api to populate with data
  //empty skeleton need to populate skeleton with data thats where useEffect us effective
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };
  // if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
  // if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onRegisterModal={handleRegisterModal}
            onLoginModal={handleLoginModal}
            onCreateModal={handleCreateModal}
            currentDate={currentDate}
            weatherLocation={loc}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route path="/profile">
              <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
                <Profile
                  onEditProfile={handleEditProfileModal}
                  userData={userData}
                  clothingItems={clothingItems}
                  onSelectCard={handleSelectedCard}
                  onCreateModal={handleCreateModal}
                  currentUser={currentUser}
                  onCardLike={handleCardLike}
                  isLoggedIn={isLoggedIn}
                  onProfileLogout={handleLogOutSubmit}
                />
              </ProtectedRoute>
            </Route>

            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCardLike={handleCardLike}
                isLoggedIn={isLoggedIn}
              />
            </Route>
          </Switch>

          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              onClose={handleCloseModal}
              isOpen={activeModal === "create"}
              handleAddItemSubmit={handleAddItemSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              currentUser={currentUser}
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onCardDelete={handleDeleteCard}
            />
          )}
          {activeModal === "signup" && (
            <RegisterModal
              handleRegisterModal={handleRegisterModal}
              onClose={handleCloseModal}
              activeModal={activeModal}
              onSecondButtonClick={handleLoginModal}
              onSubmitButtonClick={handleRegisterModalSubmit}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleLoginModal={handleLoginModal}
              onClose={handleCloseModal}
              activeModal={activeModal}
              onSecondButtonClick={handleRegisterModal}
              onSubmitButtonClick={handleLoginModalSubmit}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              onClose={handleCloseModal}
              activeModal={activeModal}
              onSaveButtonClick={handleEditProfileModalSubmit}
              handleEditProfileModal={handleEditProfileModal}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
