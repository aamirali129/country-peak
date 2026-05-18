function CountryCard({ country }) {
  return (
    <div className="country-card">
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital?.[0] || "N/A"}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
}

export default CountryCard;
