import React, { useState } from "react";
import axios from "axios";
import "dotenv";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      currentTemp: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      windDirection: response.data.wind.deg,
      description: response.data.weather[0].description,
      img: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row mt-2 ml-2">
            {" "}
            <div className="col-9">
              <input
                type="search"
                placeholder="enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <div className="container mt-3">
          <WeatherInfo weatherData={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
