import React, { useState } from "react";
import useWeatherData from "./hooks/useWeatherData";
import WeatherDisplay from "./components/WeatherDisplay";
import RecentSearches from "./components/RecentSearches";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [recent, setRecent] = useState([]);
  const { data, loading, error, fetchWeather } = useWeatherData();

  const handleFetch = async (c) => {
    const target = c || city.trim();
    if (!target) return;

    try {
      await fetchWeather(target);

      setRecent((prev) => {
        const updated = [
          target,
          ...prev.filter((p) => p.toLowerCase() !== target.toLowerCase()),
        ];
        return updated.slice(0, 5);
      });

      setCity("");
    } catch {}
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>

      <div className="search-row">
        <input
          placeholder="Enter city"
          data-testid="city-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button data-testid="fetch-btn" onClick={() => handleFetch()}>
          Get Weather
        </button>
      </div>

      {loading && <div data-testid="loading">Loading...</div>}
      {error && <div data-testid="error">{error}</div>}

      <WeatherDisplay data={data} />

      <RecentSearches items={recent} onClick={(c) => handleFetch(c)} />
    </div>
  );
}
