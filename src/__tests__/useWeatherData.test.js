import { renderHook, act } from "@testing-library/react";
import useWeatherData from "../hooks/useWeatherData";
import { fetchWeatherByCity } from "../api";

vi.mock("../api");

test("sets data on success", async () => {
  const sample = {
    name: "Delhi",
    main: { temp: 30, humidity: 50 },
    weather: [{ main: "Clear" }],
    wind: { speed: 5 }
  };

  fetchWeatherByCity.mockResolvedValue(sample);

  const { result } = renderHook(() => useWeatherData());

  await act(async () => {
    await result.current.fetchWeather("Delhi");
  });

  expect(result.current.data).toEqual(sample);
  expect(result.current.loading).toBe(false);
});
