import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import LocationForm from "./components/LocationForm";
import ErrorDisplay from "./components/ErrorDisplay";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [weatherCardLocation, setWeatherCardLocation] = useState(
    "Manchester,UK"
  );
  const [error, setError] = useState(null);
  const [tempUnit, setTempUnit] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        setWeatherCardLocation({ lat: coords.latitude, lon: coords.longitude }),
      (err) => console.error(err),
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 0 }
    );
  };

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      getCurrentPosition();
    }
  }, [firstLoad]);

  const toggleTempUnit = () => {
    setTempUnit((currentUnit) => {
      return !currentUnit;
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <section className="weather">
        <LocationForm
          setWeatherCardLocation={setWeatherCardLocation}
          error={error}
          setError={setError}
        />
        <ToggleSwitch toggleTempUnit={toggleTempUnit} />
        {error && <ErrorDisplay error={error} />}
        <WeatherCard
          location={weatherCardLocation}
          error={error}
          setError={setError}
          tempUnit={tempUnit ? "metric" : undefined}
        />
      </section>
    </div>
  );
}

export default App;
