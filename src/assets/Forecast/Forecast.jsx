import React, { useContext, useEffect } from "react";
import MainContext from "../../../context/MainContext";
import Card from "../Card/Card";
function Forecast() {
  const { cityID, forecast, setForecast, API_KEY } = useContext(MainContext);

  useEffect(() => {
    getForecast(cityID);
  }, [cityID]);

  async function getForecast(cityID) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      const formattedData = data.list.map((item) => {
        return {
          date: item.dt_txt,
          temperature: Math.round(item.main.temp),
          weather: item.weather[0].main,
          wind: item.wind.speed,
          humidity: item.main.humidity,
          icon: item.weather[0].icon,
        };
      });
      setForecast(spliceIntoChunks(formattedData, 7));
    } catch (error) {
      console.error(error);
    }
  }

  function spliceIntoChunks(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk[0]);
    }
    return res;
  }
 
  return (
    <div>
      {forecast.map((item) => (
        <Card icon={item.icon} temperature={item.temperature} />
      ))}
    </div>
  );
}

export default Forecast;
