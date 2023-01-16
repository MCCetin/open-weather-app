import React, { useState } from "react";
import data from "../city.list.json";

function Dropdown() {
  const [input, setInput] = useState(745042);

  function handleOnChange(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <label htmlFor="cities">Choose a city </label>
      <select name="cities" onChange={handleOnChange}>
        {data.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {input}
    </div>
  );
}

export default Dropdown;
