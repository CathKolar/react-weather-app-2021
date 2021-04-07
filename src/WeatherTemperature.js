import React, { useState } from "react";

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
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="degree-unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          °F
        </span>
      </span>
    );
  }
}
