import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=52.374&lon=4.8897&exclude=hourly";
const apiKey = "17e4c2d50b76ef36977b9fd2b43d11d7";
const units = "&units=metric";
export const getWeatherData = async (cityname) => {
  try {
    const { data } = await axios.get(
      baseUrl + `&appid=${apiKey}${units}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};


// + `q=${cityname}&appid=${apiKey}${units}`