import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <section className="weather">
        <WeatherCard location={"Manchester,UK"} />
      </section>
    </div>
  );
}

export default App;
