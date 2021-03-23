import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";

const App = () => {
  return (
    <div className="App">
      <WeatherCard city="texas" />
      <WeatherCard city="milan" />
      <WeatherCard city="moscow" />
      <WeatherCard city="dubai" />
    </div>
  );
};
export default App;
