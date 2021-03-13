import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import WeatherDetail from "./Components/WeatherDetail/WeatherDetail";
const App = () => {
  return (
    <div className="App">
      <WeatherCard city="istanbul" />
      <WeatherCard city="bali" />
      <WeatherCard city="new york" />
      {/* <WeatherCard city="Amsterdam" /> */}
      {/* <WeatherDetail /> */}
    </div>
  );
};
export default App;
