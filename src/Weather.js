import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather mt-5">
      <div className="row">
        {" "}
        <div className="col-9">
          <input
            type="search"
            placeholder="enter a city..."
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="search" className="btn btn-primary" />
        </div>
      </div>

      <h1>Seville</h1>
      <ul>
        <li>Monday 21:13</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          6°C
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
  );
}
