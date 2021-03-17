import React, { useState, useEffect } from "react";
import "./WeatherCard.css";
import { getWeatherData } from "../WeatherInfo/WeatherInfo";
import WeatherDetail from "../WeatherDetail/WeatherDetail";

const WeatherCard = ({ city }) => {
  const [toggleState, setToggleState] = useState("off");
  const [weatherdata, setWeatherData] = useState(null);
  
  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }
  
  const getData = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="card" onClick={toggle}>
        <div className="title">Weather card</div>
        {weatherdata !== null ? (
          <div className="main-container">
            <div className="left">
              <h2>
                {weatherdata.name} | {weatherdata.sys.country} |
              </h2>
              <h2> {weatherdata.main.temp}&deg;C</h2>
              <h3>{weatherdata.weather[0].main}</h3>
              <p>Min: {weatherdata.main.temp_min}&deg;C</p>
              <p>Max: {weatherdata.main.temp_max}&deg;C</p>
              <p>Humidity: {weatherdata.main.humidity}%</p>
            </div>
            <div className="rechts">
              <img
                className="weather__icon"
                src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`}
              ></img>
            </div>
          </div>
        ) : null}
      </div>
      {toggleState === "off" ? null : (
        <WeatherDetail
          lat={weatherdata.coord.lat}
          lon={weatherdata.coord.lon}
        />
      )}
    </div>
  );
};
export default WeatherCard;
