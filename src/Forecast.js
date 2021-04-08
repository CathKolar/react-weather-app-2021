import React, { useState } from "react";
import "dotenv";

import "./Forecast.css";
import axios from "axios";
import ForecastDaily from "./ForecastDaily";

export default function Forecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row ">
          <div className="col-sm">
            <ForecastDaily forecastData={forecast[1]} />{" "}
          </div>
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
