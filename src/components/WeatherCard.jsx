import React, { useState, useEffect } from "react";
import getWeatherData from "../api";
import Loader from "./Loader";

const WeatherCard = (props) => {
  const { location, error, setError, tempUnit } = props;
  const [weatherData, setWeatherData] = useState(null);
  if (!weatherData && !error)
    getWeatherData(location, tempUnit)
      .then((data) => {
        console.log(tempUnit);
        setWeatherData(data);
      })
      .catch(({ response }) => {
        const {
          status,
          data: { message },
        } = response;
        setError({ status, message });
      });

  useEffect(() => {
    setWeatherData(null);
  }, [location, tempUnit]);

  if (!weatherData && !error) return <Loader />;

  return (
    !error && (
      <div className="weather-card">
        <h2>
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <p className="location-temp">
          {Math.round(weatherData.main.temp)} °{tempUnit ? "C" : "F"}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].main}
        />
        <p className={"weather-description"}>
          {weatherData.weather[0].description}
        </p>
      </div>
    )
  );
};

export default WeatherCard;
