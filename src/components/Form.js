const Form = ({ city, setCity, getWether }) => {
  return (
    <form onSubmit={getWether}>
      <input
        type="text"
        name="city"
        value={city}
        placeholder="都市名"
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
