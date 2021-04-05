import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";


const App = () => {
  return (
    <div className="App">
      <WeatherCard city="istanbul" />
      <WeatherCard city="TORONTO" />
      <WeatherCard city="casablanca" />
      <WeatherCard city="dubai" />
    </div>
  );
};
export default App;
