import "./App.css";
import Header from "../Header/Header";
function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="weather" id="weather">
          <div className="weather_info">75F</div>
            <img src="/images/day/sunny.svg" className="weather_image"/>
        </section>
        <section id="card-section">Card Section</section>
      </main>
    </div>
  );
}

export default App;
