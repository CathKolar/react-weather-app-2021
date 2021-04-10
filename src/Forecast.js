import React, { useState, useEffect } from "react";
import "dotenv";

import "./Forecast.css";
import axios from "axios";
import ForecastDaily from "./ForecastDaily";

export default function Forecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let latitude = coordinates.lat;
    let longitude = coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast mb-4 pl-4 pr-4">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index >= 1 && index < 6) {
              return (
                <div className="col-sm  mt-1" key={index}>
                  <ForecastDaily forecastData={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
