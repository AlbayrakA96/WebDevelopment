import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import WeatherDetail from "./Components/WeatherDetail/WeatherDetail";
const App = () => {
  return (
    <div className="App">
      <WeatherCard city="istanbul" />
      <WeatherCard city="Moscow" />
      <WeatherDetail />
    </div>
  );
};
export default App;
