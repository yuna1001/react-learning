const Results = (props) => {
  const results = props.results;

  return (
    <div>
      {results.cityName && <div>{results.cityName}</div>}
      {results.country && <div>{results.country}</div>}
      {results.tempreature && (
        <div>
          {results.tempreature}
          <span>℃</span>
        </div>
      )}
      {results.conditionText && (
        <div>
          <img src={results.icon} alt="icon" />
          <span>{results.conditionText}</span>
        </div>
      )}
    </div>
  );
};

export default Results;
