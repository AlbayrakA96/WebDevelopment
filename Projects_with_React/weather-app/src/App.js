import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import Header from './Components/Header'


const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <WeatherCard city="istanbul" />
      <WeatherCard city="TORONTO" />
      <WeatherCard city="casablanca" />
      <WeatherCard city="bangkok" />
      <WeatherCard city="dubai" />
      <WeatherCard city="bali" />
      <WeatherCard city="New york" />
      <WeatherCard city="Sao paulo" />
    </div>
  );
};
export default App;
