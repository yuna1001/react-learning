const Results = (props) => {
  const results = props.results;

  return (
    <div>
      {results.cityName && (
        <div className="results-city">{results.cityName}</div>
      )}
      {results.country && (
        <div className="results-country">{results.country}</div>
      )}
      {results.tempreature && (
        <div className="results-temp">
          {results.tempreature}
          <span>℃</span>
        </div>
      )}
      {results.conditionText && (
        <div className="results-condition">
          <img src={results.icon} alt="icon" />
          <span>{results.conditionText}</span>
        </div>
      )}
    </div>
  );
};

export default Results;
