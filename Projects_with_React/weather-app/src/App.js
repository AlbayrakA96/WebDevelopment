import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import WeatherDetail from "./Components/WeatherDetail/WeatherDetail";
const App = () => {
  return (
    <div className="App">
      <div className="Weather_card">
        <WeatherCard city="Amsterdam" />
        <WeatherCard city="Moscow" />
      </div>
      <WeatherDetail />
    </div>
  );
};
export default App;
