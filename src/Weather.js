import React, { useState } from "react";
import axios from "axios";
import "dotenv";
import "./Weather.css";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "Monday 12:08",
      city: response.data.name,
      currentTemp: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      windDirection: response.data.wind.deg,
      description: response.data.weather[0].description,
      img: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather container mt-5">
        <div className="row mt-2 ml-2">
          {" "}
          <div className="col-9">
            <input
              type="search"
              placeholder="enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
        <div className="container mt-3">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <img src={weatherData.img} alt="sunny" />
              <span className="current-temp">
                {Math.round(weatherData.currentTemp)}
              </span>
              <span className="degree-unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.windSpeed} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
