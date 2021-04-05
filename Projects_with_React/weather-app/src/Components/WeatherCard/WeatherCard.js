import React, { useState, useEffect } from "react";
import "./WeatherCard.css";
import { getWeatherData } from "../WeatherInfo/WeatherInfo";
import WeatherDetail from "../WeatherDetail/WeatherDetail";
import Clock2 from "./Clock2";

import Clock from "react-live-clock";

// import weather conditions
import clear from "./images/clearsky.jpg";
import clear2 from "./images/clearsky2.jpg";
import broken from "./images/brokenclouds.jpg";
import few from "./images/fewclouds.jpg";
import mist from "./images/mist.jpg";
import rain from "./images/rain.jpg";
import scattered from "./images/scatteredclouds.jpg";
import shower from "./images/showerrain.jpg";
import snow from "./images/snow.jpg";
import thunderstorm from "./images/thunderstorm.jpg";
import sun from "./images/sun.gif";

const WeatherCard = ({ city, date }) => {
  const [toggleState, setToggleState] = useState("off");
  const [weatherdata, setWeatherData] = useState(null);
  
  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getWeatherData(city);
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [city]);
  return (
    
    <div className="overview">
      <div className="card_wrapper">
        {weatherdata !== null ? (
          <div className="card" onClick={toggle}>
            {weatherdata.main.temp > 25 ? (
              <img src={sun} alt="sun" id="weather-img" />
            ) : weatherdata.weather[0].description.includes("few clouds") ? (
              <img src={few} alt="few" id="weather-img" />
            ) : weatherdata.weather[0].description.includes(
                "overcast clouds"
              ) ? (
              <img src={few} alt="few" id="weather-img" />
            ) : weatherdata.weather[0].description.includes("clear sky") ? (
              <img src={clear} alt="scattered" id="weather-img" />
            ) : weatherdata.weather[0].description.includes(
                "scattered clouds"
              ) ? (
              <img src={scattered} alt="held" id="weather-img" />
            ) : weatherdata.weather[0].description.includes("broken clouds") ? (
              <img src={broken} alt="helder" id="weather-img" />
            ) : weatherdata.weather[0].description.includes("shower rain") ? (
              <img src={shower} alt="helder" id="weather-img" />
            ) : weatherdata.weather[0].description.includes("rain") ? (
              <img src={rain} alt="helder" id="weather-img" />
            ) : weatherdata.weather[0].description.includes("thunderstorm") ? (
              <img src={thunderstorm} alt="helder" id="weather-img" />
            ) : weatherdata.weather[0].description.includes("snow") ? (
              <img src={snow} alt="helder" id="weather-img" />
            ) : weatherdata.weather[0].description.includes("mist") ? (
              <img src={mist} alt="helder" id="weather-img" />
            ) : (
              ""
            )}
            <div className="main-container">
              <h2 className="title">
                {weatherdata.name} <span>{weatherdata.sys.country}</span>
              </h2>
              <Clock2  lat={weatherdata.coord.lat} lon={weatherdata.coord.lon} />
              <img
                className="weather__icon"
                src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`}
              ></img>
              <h3>{weatherdata.main.temp}&deg;C</h3>
              <div className="temp"></div>
              <div className="location">
                <h2>{weatherdata.weather[0].description}</h2>
              </div>
              <div className="temp-range">
                <p>
                  <span>Min:</span> {weatherdata.main.temp_min}&deg;C
                </p>
                <p>
                  <span>Max:</span> {weatherdata.main.temp_max}&deg;C
                </p>
                <p>
                  <span>Humidity:</span> {weatherdata.main.humidity}%
                </p>
              </div>
            </div>

            {/* <div className="main-container1">
                <p><span>Maandag</span>{}</p>
                <p><span>Dinsdag</span> </p>
                <p><span>Woensdag</span></p>
                <p><span>Donderdag</span> </p>
                <p><span>Vrijdag</span> </p>
                <p><span>Zaterdag</span> </p>
                <p><span>Zondag</span> </p>
            </div> */}
          </div>
        ) : null}
      </div>
      <div>
        {toggleState === "off" ? null : (
          <WeatherDetail
            lat={weatherdata.coord.lat}
            lon={weatherdata.coord.lon}
            name={weatherdata.name}
          />
        )}
      </div>
    </div>
  );
};
export default WeatherCard;
