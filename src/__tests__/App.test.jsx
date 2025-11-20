import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import axios from "axios";

vi.mock("axios");

const mockData = {
  name: "Bengaluru",
  main: { temp: 26.24, humidity: 62 },
  weather: [{ main: "Clouds", description: "few clouds" }],
  wind: { speed: 8.94 }
};

function mockAxiosSuccess(data = mockData) {
  axios.get.mockImplementationOnce(() =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ data }), 5)
    )
  );
}

function mockAxiosError(message = "city not found") {
  axios.get.mockImplementationOnce(() =>
    new Promise((_, reject) =>
      setTimeout(
        () =>
          reject({
            response: { data: { message } },
          }),
        5
      )
    )
  );
}

describe("App Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders input and button", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Enter city")).toBeInTheDocument();
    expect(screen.getByTestId("fetch-btn")).toBeInTheDocument();
  });

  test("fetches and displays weather data", async () => {
    mockAxiosSuccess();

    render(<App />);

    await userEvent.type(screen.getByTestId("city-input"), "bengaluru");
    await userEvent.click(screen.getByTestId("fetch-btn"));

    

    expect(await screen.findByTestId("city-name")).toHaveTextContent("Bengaluru");
  });

  test("shows error when API fails", async () => {
    mockAxiosError();

    render(<App />);

    await userEvent.type(screen.getByTestId("city-input"), "wrong");
    await userEvent.click(screen.getByTestId("fetch-btn"));

    expect(await screen.findByTestId("error")).toHaveTextContent("city not found");
  });

  test("recent search triggers API call again", async () => {
    mockAxiosSuccess();

    render(<App />);

    await userEvent.type(screen.getByTestId("city-input"), "bengaluru");
    await userEvent.click(screen.getByTestId("fetch-btn"));

    await screen.findByTestId("city-name");

    mockAxiosSuccess();
    await userEvent.click(screen.getByTestId("recent-0"));

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(2);
    });
  });
});
