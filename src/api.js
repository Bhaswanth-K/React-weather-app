import axios from "axios";

const BASE = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchWeatherByCity = async (city) => {
  const url = `${BASE}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  return axios.get(url).then((res) => res.data);
};
