import axios from "axios";
import { useState } from "react";

/** https://www.weatherapi.com */
const api_key = "";

const Form = () => {
  const [city, setCity] = useState("");
  const getWether = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${api_key}=London&aqi=no`
      )
      .then((res) => console.log(res));
  };

  return (
    <form>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit" onClick={getWether}>
        Get Weather
      </button>
    </form>
  );
};

export default Form;
