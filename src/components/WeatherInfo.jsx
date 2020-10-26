import React, { useState } from "react";
import getWeatherData from "../api";

const WeatherInfo = (props) => {
  const { location } = props;
  const [weatherData, setWeatherData] = useState(() =>
    getWeatherData(location).then((data) => {
      console.log(data);
      return data;
    })
  );

  return <div></div>;
};

export default WeatherInfo;
