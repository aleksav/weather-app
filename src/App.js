import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import LocationForm from "./components/LocationForm";
import ErrorDisplay from "./components/ErrorDisplay";

function App() {
  const [weatherCardLocation, setWeatherCardLocation] = useState(
    "Manchester,UK"
  );
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <section className="weather">
        <LocationForm
          weatherCardLocation={weatherCardLocation}
          setWeatherCardLocation={setWeatherCardLocation}
          error={error}
          setError={setError}
        />
        {error && <ErrorDisplay error={error} />}
        <WeatherCard
          location={weatherCardLocation}
          error={error}
          setError={setError}
        />
      </section>
    </div>
  );
}

export default App;
