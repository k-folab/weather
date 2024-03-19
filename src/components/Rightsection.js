import React from "react";
import "../styles/rightsection.css";
import Smallsun from "../icons/Smallsun";
import Rainsun from "../icons/Rainsun";
import Rain from "../icons/Rain";
import Smallsun2 from "../icons/Smallsun2";
import Location from "../icons/Location";

export default function Rightsection() {
  return (
    <div className="right">
      <div className="paragraphs">
        <div className="paragraph_1">
          <div>PRECIPITATION</div>
          <div>0%</div>
        </div>

        <div className="paragraph_2">
          <div>HUMIDITY</div>
          <div>42%</div>
        </div>

        <div className="paragraph_3">
          <div>WIND</div>
          <div>3 km/h</div>
        </div>
      </div>

      {/* all boxes div */}
      <div className="boxes">
        {/* first box */}
        <div className="first_box">
          <div className="logo">
            <Smallsun />
          </div>
          <div className="day_2">Tue</div>
          <div className="deg">30 °C</div>
        </div>
        {/* first box end */}

        {/* second box */}
        <div className="second_box">
          <div className="logo">
            <Rainsun />
          </div>
          <div className="day_2">Wed</div>
          <div className="deg">22 °C</div>
        </div>
        {/* second box end */}

        {/* third box */}
        <div className="third_box">
          <div className="logo">
            <Rain />
          </div>
          <div className="day_2">Thur</div>
          <div className="deg">06 °C</div>
        </div>
        {/* third box end */}

        {/* fourth box */}
        <div className="fourth_box">
          <div className="logo">
            <Smallsun2 />
          </div>
          <div className="day_2">Fry</div>
          <div className="deg">26 °C</div>
        </div>
        {/* fourth box end */}
      </div>
      {/* all boxes div ends */}

      <div className="change_loc-box">
        <div className="loc_2">
          <Location />
        </div>
        <div className="word">Change Location</div>
      </div>
    </div>
  );
}
