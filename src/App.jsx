import { useEffect, useState } from "react";
import Dropdown from "./assets/Dropdown";
import MainContext from "../context/MainContext";
import Current from "./assets/Current/Current";
import Forecast from "./assets/Forecast/Forecast";
import "./main.css";

const API_KEY = "f641699704974e889946cdddac0996ff";

function App() {
  const [forecast, setForecast] = useState([]);
  const [current, setCurrent] = useState({});
  const [cityID, setCityID] = useState("745042");

  return (
    <div className="App">
      <MainContext.Provider
        value={{
          API_KEY,
          cityID,
          current,
          forecast,
          setCityID,
          setCurrent,
          setForecast,
        }}
      >
        <div className="info">
          <Dropdown />
          <Current />
        </div>
        <Forecast />
      </MainContext.Provider>
    </div>
  );
}

export default App;
