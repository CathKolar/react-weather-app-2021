import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo({ weatherData }) {
  return (
    <div className="WeatherInfo text-center pt-4 ">
      <div className="row  d-flex align-items-center">
        <div className="col-sm-4 pb-4">
          <WeatherIcon code={weatherData.icon} size={53} />

          <ul>
            <li className="text-capitalize">{weatherData.description}</li>
            <li>
              <span className="temp-high-low-today">
                <strong>{Math.round(weatherData.high)}</strong>º|{" "}
                {Math.round(weatherData.low)}º
              </span>
            </li>
          </ul>
        </div>

        <div className="col-sm-4  pb-4 current-place-time">
          <div className="current-temp pl-3">
            <WeatherTemperature celsius={weatherData.currentTemp} />
          </div>
          <span className="">
            <h1>{weatherData.city}</h1>
            <FormattedDate date={weatherData.date} />
          </span>
        </div>
        <div className="col-sm-4 pb-4">
          <ul>
            <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.windSpeed} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
