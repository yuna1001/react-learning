const Results = ({ results }) => {
  const { cityName, country, tempreature, conditionText, icon } = results;

  return (
    <>
      {cityName && <div className="results-city">{cityName}</div>}
      {country && <div className="results-country">{country}</div>}
      {tempreature && (
        <div className="results-temp">
          {tempreature}
          <span>℃</span>
        </div>
      )}
      {conditionText && (
        <div className="results-condition">
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      )}
    </>
  );
};

export default Results;
