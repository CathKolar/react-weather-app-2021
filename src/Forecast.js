import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row ">
        <div className="col-sm">
          {" "}
          <div className="Forecast-day">Thu</div>
          <div className="Forecast-icon">
            <WeatherIcon code="01d" size="33" />
          </div>{" "}
          <div className="Forecast-temps">
            <span className="Forecast-temp-max">19°</span>
            <span className="Forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
