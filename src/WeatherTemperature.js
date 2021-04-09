import React, { useState } from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature({ celsius }) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="degree-unit">
          °C{" "}
          <a href="/" onClick={showFahrenheit}>
            <sup>°F</sup>
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="degree-unit">
          °F
          <a href="/" onClick={showCelsius}>
            <sup>°C</sup>
          </a>
        </span>
      </span>
    );
  }
}
