import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/onecall?";
const apiKey = "08258fc2397ad270f2ddef0264be6f73";
const units = "&units=metric";

const part = "";
export const getWeatherData = async (lat, lon) => {
  try {
    const { data } = await axios.get(
      baseUrl + `lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}${units}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
