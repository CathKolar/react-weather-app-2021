import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo({weatherData, }) {
  return (
    <div className="WeatherInfo">
      <h1>{weatherData.city}</h1>
      <ul>
        <li>
          <FormattedDate date={weatherData.date} />
        </li>
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
  );
}
