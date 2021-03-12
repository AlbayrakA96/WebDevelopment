import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <h2 className="title">
          <i className="fa fa-cloud"></i>Weather App
        </h2>
        <div className="search-form">
          <input type="text" placeholder="Voer uw stad in" />
          <button type='button'>Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
