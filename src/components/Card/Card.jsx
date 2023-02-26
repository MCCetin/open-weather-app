import React from "react";
import styles from "./styles.module.css";

function Card({ icon, temperature, day }) {
  return (
    <div className={styles.card}>
      <span>{day}</span>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <span>{temperature} °C</span>
    </div>
  );
}

export default Card;
