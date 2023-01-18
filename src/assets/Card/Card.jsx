import React from "react";

function Card({ icon, temperature, day }) {
  return (
    <div>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <span>{day}</span>
      <br />
      <span>{temperature}</span>
    </div>
  );
}

export default Card;
