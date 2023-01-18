import React, { useContext, useEffect } from "react";
import MainContext from "../../../context/MainContext";
import "./styles.css";

function Current() {
  const { cityID, current, setCurrent, API_KEY } = useContext(MainContext);

  useEffect(() => {
    getCurrent(cityID);
  }, [cityID]);   

  async function getCurrent(cityID) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setCurrent({
        name: data.name,
        temperature: Math.round(data.main.temp),
        weather: data.weather[0].main,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <img
        src={`http://openweathermap.org/img/wn/${current.icon}@2x.png`}
        alt=""
      />
      <div>
        <span className="degree">{current.temperature}&#176;</span>
      </div>
      <div className="current-info">
        <span>Humidity: {current.humidity}%</span>
        <span>Wind: {current.wind}km/h</span>
      </div>
    </div>
  );
}

export default Current;
