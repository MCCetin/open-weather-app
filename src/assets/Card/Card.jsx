import React from "react";

function Card({ icon, temperature }) {
  return (
    <div>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <span>{temperature}</span>
    </div>
  );
}

export default Card;
