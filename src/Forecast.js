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

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row ">
          {forecast.map(function (dailyForecast, index) {
            if (index >= 1 && index < 6) {
              return (
                <div className="col-sm" key={index}>
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
    let latitude = coordinates.lat;
    let longitude = coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
