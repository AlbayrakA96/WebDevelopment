import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import WeatherDetail from "./Components/WeatherDetail/WeatherDetail";
const App = () => {
  const [toggleState, setToggleState] = useState("off");
  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  return (
    <div className="App">
      <div className="Weather_card">
        <WeatherCard city="Dubai" click={toggle} />
        <WeatherCard city="Amsterdam" click={toggle} />
        {toggleState === "off" ? null : <WeatherDetail />}
      </div>
    </div>
  );
};
export default App;
