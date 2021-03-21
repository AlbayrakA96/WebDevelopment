import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";

const App = () => {
  return (
    <div className="App">
      <WeatherCard city="moscow" />
      <WeatherCard city="dubai" />
      <WeatherCard city="bali" />
      <WeatherCard city="chicago" />
      <WeatherCard city="istanbul" />
      <WeatherCard city="singapore" />
      <WeatherCard city="tokyo" />
      <WeatherCard city="milaan" />
    </div>
  );
};
export default App;
