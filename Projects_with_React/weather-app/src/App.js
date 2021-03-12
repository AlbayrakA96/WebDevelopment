import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import WeatherDetail from './Components/WeatherDetail/WeatherDetail'
const App = () => {

  return (
    <div className="App">
      <WeatherCard city="Rotterdam" />
      <WeatherCard city="Amsterdam" />
      <WeatherCard city="Las Vegas" />
      <WeatherDetail />
    </div>
  );
};
export default App;
