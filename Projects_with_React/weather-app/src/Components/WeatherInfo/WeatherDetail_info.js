import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=";
const apiKey = "08258fc2397ad270f2ddef0264be6f73";

export const getWeatherDetail= async () => {
  try {
    const { data } = await axios.get(baseUrl + apiKey);

    return data;
  } catch (error) {
    throw error;
  }
};