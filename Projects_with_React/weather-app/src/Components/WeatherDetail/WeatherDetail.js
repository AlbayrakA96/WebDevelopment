import React, { useState, useEffect } from "react";
import { getWeatherData } from "../WeatherInfo/WeatherDetail_info";
import "./WeatherDetail.css";
// FUNCTION WEATHERDETAIL-------------------------------------------------------------------------------------------------------
const WeatherDetail = ({ city }) => {
  const [weatherdata, setWeatherData] = useState(null);
  //   const [city, setCity] = useState('istanbul');
  const [loading, setLoading] = useState(false);
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
  // NEW SUB-FUNCTION FOR ACCORDION BELOW ///----------------------------------------------------------------------------------------
  const [active, setActive] = useState("");
  const Accordion = ({ title, active, setActive }) => {
    let d = new Date(title.dt * 1000).toLocaleDateString();
    let min = Math.floor(title.temp.min);
    let max = Math.floor(title.temp.max);

    console.log(d);
    console.log(weatherdata.daily);
    return (
      <div className="accordion">
        <div className="accordionHeading">
          <div className="container">
            <p>
              {d} {min}/{max}&deg;C
            </p>
            <span onClick={() => setActive({ d })}>
              {active === { d } ? "X" : "|||"}
            </span>
          </div>
        </div>
        <div className={(active === { d } ? "show" : "") + " accordionContent"}>
          <div className="container">
            <p>
              {d}
              {weatherdata.timezone}
              {weatherdata.current.temp}
            </p>
          </div>
        </div>
      </div>
    );
  };
  // ------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="weatherDetails">
      {weatherdata !== null ? (
        <div>
          <h3>WeatherDetails/accordion{weatherdata.timezone}</h3>
          {weatherdata.daily.map(( datum, index ) => (
            <div>
              <Accordion title={datum} key={index} />
            </div>
          ))}
        </div>
      ) : null}
      <div>Hello{}</div>
    </div>
  );
};
export default WeatherDetail;
// const weatherIcon = "http://openweathermap.org/img/w/";
