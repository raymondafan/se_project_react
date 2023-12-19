import "./App.css";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
function App() {
  return (
    <div>
      <Header />
      <main className="main">
       <WeatherCard day={false} type="moon"/>
        <section id="card-section">Card Section</section>
      </main>
    </div>
  );
}

export default App;
