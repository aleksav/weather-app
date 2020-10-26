import axios from "axios";
import token from "./token";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const getWeatherData = (location, units = "metric") => {
  return instance
    .get(
      `weather?q=${location}&appid=${token.OPEN_WEATHER_TOKEN}&units=${units}`
    )
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export default getWeatherData;
