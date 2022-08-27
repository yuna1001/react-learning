import axios from "axios";
import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import "./styles.css";

/** https://www.weatherapi.com */
const api_key = "";

export default function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    tempreature: "",
    conditionText: "",
    icon: ""
  });

  const getWether = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`
      )
      .then((res) => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          tempreature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        });
      });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWether={getWether} />
        <Results results={results} />
      </div>
    </div>
  );
}
