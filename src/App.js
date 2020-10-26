import "./App.css";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <WeatherInfo location={"Manchester,UK"} />
    </div>
  );
}

export default App;
