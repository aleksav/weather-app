import React, { useState } from "react";
import getWeatherData from "../api";

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  getWeatherData("Manchester,UK").then((data) => setWeatherData(data));

  return <div></div>;
};

export default WeatherInfo;
