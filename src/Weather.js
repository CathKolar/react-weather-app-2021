import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather mt-5">
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
        <h1>Seville</h1>
        <ul>
          <li>Monday 21:13</li>
          <li>Sunny</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />
            <span className="current-temp">6</span>
            <span className="degree-unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 45%</li>
              <li>Wind: 9 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
