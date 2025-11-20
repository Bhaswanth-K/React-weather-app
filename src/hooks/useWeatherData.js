import { useState, useCallback } from "react";
import { fetchWeatherByCity } from "../api";

export default function useWeatherData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchWeatherByCity(city);
      setData(result);
      setLoading(false);
      return result;
    } catch (err) {
      setData(null);
      setError(err?.response?.data?.message || "Error fetching weather");
      setLoading(false);
      throw err;
    }
  }, []);

  return { data, loading, error, fetchWeather };
}
