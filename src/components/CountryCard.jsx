function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img
        src={country.flags?.png}
        alt={country.name?.common}
        className="flag"
      />

      <div className="card-content">
        <h2>{country.name?.common}</h2>

        <p>
          <strong>Population:</strong>{" "}
          {country.population?.toLocaleString()}
        </p>

        <p>
          <strong>Region:</strong> {country.region}
        </p>

        <p>
          <strong>Capital:</strong> {country.capital?.[0] ?? "N/A"}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;