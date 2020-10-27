import React, { useState, useEffect } from "react";
import getWeatherData from "../api";
import Loader from "./Loader";

const WeatherCard = (props) => {
  const { location } = props;
  const [weatherData, setWeatherData] = useState(null);
  if (!weatherData)
    getWeatherData(location).then((data) => {
      return setWeatherData(data);
    });

  useEffect(() => {
    if (location) setWeatherData(null);
  }, [location]);

  if (!weatherData) return <Loader />;

  return (
    <div className="weather-card">
      <h2>
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <p className="location-temp">{Math.round(weatherData.main.temp)} °C</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].main}
      />
      <p className={"weather-description"}>
        {weatherData.weather[0].description}
      </p>
    </div>
  );
};

export default WeatherCard;
