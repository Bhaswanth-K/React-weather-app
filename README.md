#  Weather Dashboard

A simple React app that lets users search for a city and view its current weather.

---

##  Working part
- Search weather by city  
- Shows temperature, condition, humidity, and wind  
- Displays last 5 recent searches  
- Shows **Loading...** while fetching  
- Shows error when city is not found  

---

##  Internal Working part
- Uses **axios** to call the OpenWeatherMap API  
- A custom hook `useWeatherData()` manages:
  - weather data  
  - loading state  
  - error state  
  - fetch function  
- Recent searches are stored in component state  
- `WeatherDisplay` component shows the results  

---

##  Testing part
- Rendering tests (input, button, components)  
- User interaction tests (typing & button clicks)  
- Loading state tests  
- Error handling tests  
- Weather data display tests  
- Custom hook tests  

---
## Output
![Output 1](https://github.com/Bhaswanth-K/React-weather-app/blob/master/output/q1%20(1).png)
![Output 2](https://github.com/Bhaswanth-K/React-weather-app/blob/master/output/q1%20(4).png)
![Output 3](https://github.com/Bhaswanth-K/React-weather-app/blob/master/output/q1%20(2).png)
![Output 4](https://github.com/Bhaswanth-K/React-weather-app/blob/master/output/q1%20(3).png)


