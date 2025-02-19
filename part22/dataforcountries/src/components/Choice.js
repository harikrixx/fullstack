import Results from './Results'
import OneCountryDisplay from './OneCountryDisplay'

const Choice = ({ country, result }) => {
  let filtered = [];

  if (country.length > 0) {
    filtered = result.filter(res =>
      res.name.common.toLowerCase().includes(country.toLowerCase())
    );
  } else {
    filtered = result;
  }

  if (filtered.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (filtered.length === 1) {
    return filtered.map(res => <OneCountryDisplay key={res.cca2} result={res} />);
  } else {
    return (
      <div>
        {filtered.map(res => (
          <div key={res.cca2} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={res.flags.svg} alt={`Flag of ${res.name.common}`} width="40" />
            <Results result={res} />
          </div>
        ))}
      </div>
    );
  }
};

export default Choice;
