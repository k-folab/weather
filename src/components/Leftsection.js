import React from "react";
import "../styles/leftsection.css";
import Location from "../icons/Location";
import Sun from "../icons/Sun";

export default function Leftsection() {
  return (
    <div className="left">
      <div className="left_wrapper">
        <div className="day">Tuesday</div>
        <div className="date">20 Jun 2022</div>

        <div className="weather_loc">
          <div className="loc_logo">
            <Location />
          </div>
          <div className="location">Biarritz, FR</div>
        </div>

        <div className="sunshine">
          <Sun />
        </div>
        <div className="temp">29 °C</div>
        <div className="cond">Sunny</div>
      </div>
    </div>
  );
}
