import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDaily({ forecastData }) {
  function maxTemp() {
    let temperature = Math.round(forecastData.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(forecastData.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(forecastData.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDaily mb-2">
      <div className="Forecast-day pb-1">{day()}</div>
      <div className="Forecast-icon">
        <WeatherIcon code={forecastData.weather[0].icon} size={33} />
      </div>{" "}
      <div className="Forecast-temps">
        <span className="Forecast-temp-max">{maxTemp()}°</span>
        <span className="Forecast-temp-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
