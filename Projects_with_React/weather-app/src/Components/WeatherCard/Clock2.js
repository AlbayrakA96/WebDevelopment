import React, { useState, useEffect } from "react";
import { getWeatherData } from "../WeatherInfo/WeatherDetail_info";


import Clock from "react-live-clock";

// FUNCTION WEATHERDETAIL-------------------------------------------------------------------------------------------------------
const Clock2 = ({ lat, lon }) => {
  const [weatherdata, setWeatherData] = useState(null);
  const style = {
    fontSize: '30px'
  }

  useEffect(() => {
    let isMounted = true
    const getData = async () => {
      try {
        const data = await getWeatherData(lat, lon);
        setWeatherData(data.timezone);
        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [lat, lon]);
  
  return (
      <div>
          <Clock style={style} format={'HH:mm:ss'} ticking={true} timezone={weatherdata} />
      </div>
  )
};

export default Clock2