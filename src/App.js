import axios from "axios";
import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Loading from "./components/Loading";
import "./styles.css";

/** https://www.weatherapi.com */
const api_key = "";

export default function App() {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

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

        setCity("");
        setLoading(false);
      })
      .catch((err) => alert("エラーが発生しました。"));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWether={getWether} city={city} />
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );
}
