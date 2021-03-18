import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";

const App = () => {
  return (
    <div className="App">
      <div className="Weather_card">
        <WeatherCard city="Dubai" />
        <WeatherCard city="Milaan" />
      </div>
    </div>
  );
};
export default App;
