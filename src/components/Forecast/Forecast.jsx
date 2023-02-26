import React, { useContext, useEffect } from "react";
import MainContext from "../../context/MainContext";
import Card from "../Card/Card";
import "./styles.css";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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
        const date = item.dt_txt.split(" ");
        return {
          day: days[new Date(date[0]).getDay()],
          temperature: Math.round(item.main.temp),
          weather: item.weather[0].main,
          wind: item.wind.speed,
          humidity: item.main.humidity,
          icon: item.weather[0].icon,
        };
      });
      setForecast(spliceIntoChunks(formattedData, 8));
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
    <div className="forecast">
      {forecast.map((item) => (
        <Card icon={item.icon} temperature={item.temperature} day={item.day} />
      ))}
    </div>
  );
}

export default Forecast;
