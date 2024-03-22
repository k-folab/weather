import { useEffect, useState } from "react";
import "../styles/leftsection.css";
import Location from "../icons/Location";
import Sun from "../icons/Sun";
const APIKey = process.env.REACT_APP_API_KEY;

export default function Leftsection() {
  // 1. Get latitude and longitude of the current location
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const APIKey = process.env.REACT_APP_API_KEY;
  // getting the lat and long using geolocation from the browser
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (response) => {
          console.log(response);
          setLatitude(response?.coords?.latitude);
          setLongitude(response?.coords?.longitude);
        },

        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      alert(error);
    }
  }, []);

  // passing the lat and long to fetch the data
  // ---- put the api key in an env file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}`
        );
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (!!latitude && !!longitude) {
      fetchData();
    }
  }, [latitude, longitude]);

  return (
    <div className="left">
      <div className="left_wrapper">
        <div className="day">Tuesday</div>
        <div className="date">20 Jun 2022</div>

        <div className="weather_loc">
          <div className="loc_logo">
            <Location />
          </div>
          <div className="location">
            {data?.name}, {data?.sys?.country}
          </div>
        </div>

        <div className="sunshine">
          <Sun />
        </div>
        <div className="temp">{Math.round(data?.main?.temp - 273.15)} C</div>
        <div className="cond">{data?.weather[0]?.description}</div>
      </div>
    </div>
  );
}
