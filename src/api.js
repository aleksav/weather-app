import axios from "axios";
import token from "./token";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const getWeatherData = (location, units = "imperial") => {
  if (typeof location === "string")
    return instance
      .get(
        `weather?q=${location}&appid=${token.OPEN_WEATHER_TOKEN}&units=${units}`
      )
      .then(({ data }) => data);

  return instance
    .get(
      `weather?lat=${location.lat}&lon=${location.lon}&appid=${token.OPEN_WEATHER_TOKEN}&units=${units}`
    )
    .then(({ data }) => data);
};

export default getWeatherData;
