import React from "react";

export default function WeatherDisplay({ data }) {
  if (!data) return <div data-testid="no-data">No data</div>;

  return (
    <div data-testid="weather-card">
      <h2 data-testid="city-name">{data.name}</h2>
      <p data-testid="temp">Temperature: {data.main.temp} °C</p>
      <p data-testid="condition">
        Condition: {data.weather[0].main} ({data.weather[0].description})
      </p>
      <p data-testid="humidity">Humidity: {data.main.humidity}%</p>
      <p data-testid="wind">Wind: {data.wind.speed} m/s</p>
    </div>
  );
}
