import { render, screen } from "@testing-library/react";
import WeatherDisplay from "../components/WeatherDisplay";

test("displays weather info", () => {
  const sample = {
    name: "Bengaluru",
    main: { temp: 26.24, humidity: 62 },
    weather: [{ main: "Clouds", description: "few clouds" }],
    wind: { speed: 8.94 }
  };

  render(<WeatherDisplay data={sample} />);

  expect(screen.getByTestId("city-name")).toHaveTextContent("Bengaluru");
});
