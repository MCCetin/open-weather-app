import { useEffect, useState } from "react";
import Dropdown from "./assets/Dropdown";
function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getWeatherData();
  }, []);
  async function getWeatherData(cityID) {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?id=315808&units=metric&appid=f641699704974e889946cdddac0996ff"
      );
      const data = await response.json();
      setData(
        data.list.map((item) => {
          const dateAndTime = item.dt_txt.split(" ");
          return {
            date: dateAndTime[0],
            time: dateAndTime[1],
            temperature: Math.round(item.main.temp),
            weather: item.weather[0].main,
            wind: item.wind.speed,
            humidity: item.main.humidity,
            icon: item.weather[0].icon,
          };
        })
      );
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  return (
    <div className="App">
      <Dropdown />
      <br />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${data[0].icon}@2x.png`}
            alt=""
          />
          <p>{data[0].temperature}</p>
        </div>
      )}
    </div>
  );
}

export default App;
