import React, { Component } from "react";
import "./Info.css";


const Info = (props) => {
  return (
    <section>
      <h1>
        Weather
        <br /> <span>App</span>
      </h1>
      <p>Weather app in opdracht van TechGrounds </p>
      <p className="names">
        Yassin Chakai <br />
        Sayf Amian <br />
        Abdusselam Albayrak
      </p>

      <h3>Your weather is currently showing in:</h3>
      <div className="buttons">
          <div className="btn">
              {props.tempSymbol === 'C' ?
              <button className="clicked">C</button> 
              :
              <button onClick={props.setTempSymbol}>C</button>}
              <p>Celsius</p>
          </div>
          <div className="btn">
              {props.tempSymbol === 'F' ?
              <button className="clicked">F </button>
            :
              <button onClick={props.setTempSymbol}>F</button>}
              <p>Fahrenheit</p>
          </div>
      </div>
    </section>
  );
};

export default Info;
