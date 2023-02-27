import React, { useContext, useState } from "react";
import data from "../../city.list.json";
import MainContext from "../../context/MainContext";
import styles from "./styles.module.css";

function Dropdown() {
  const { setCityID } = useContext(MainContext);

  function handleOnChange(e) {
    setCityID(e.target.value);
  }
  return (
    <div className={styles.dropdown}>
      <select name="cities" onChange={handleOnChange}>
        {data.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
