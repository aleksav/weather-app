import React, { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import LocationForm from "./components/LocationForm";

function App() {
  const [weatherCardLocation, setWeatherCardLocation] = useState(
    "Manchester,UK"
  );

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <section className="weather">
        <LocationForm
          weatherCardLocation={weatherCardLocation}
          setWeatherCardLocation={setWeatherCardLocation}
        />
        <WeatherCard location={weatherCardLocation} />
      </section>
    </div>
  );
}

export default App;
