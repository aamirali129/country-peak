import { useNavigate, useParams } from "react-router-dom";
import useCountry from "../hooks/useCountry";

function CountryPage() {
  const { code } = useParams();

  const navigate = useNavigate();

  const { country, loading, error } = useCountry(code);

  if (loading) {
    return <p className="page">Loading...</p>;
  }

  if (error) {
    return <p className="page">{error}</p>;
  }

  if (!country) {
    return null;
  }

  return (
    <div className="page">
      <button onClick={() => navigate(-1)} className="back-btn">
        Back
      </button>

      <div className="country-detail">
        <img
          src={country.flags?.png}
          alt={country.name?.common}
          className="detail-flag"
        />

        <div className="detail-content">
          <h1>{country.name?.common}</h1>

          <p>
            <strong>Official Name:</strong>{" "}
            {country.name?.official}
          </p>

          <p>
            <strong>Population:</strong>{" "}
            {country.population?.toLocaleString()}
          </p>

          <p>
            <strong>Region:</strong> {country.region}
          </p>

          <p>
            <strong>Subregion:</strong> {country.subregion ?? "N/A"}
          </p>

          <p>
            <strong>Capital:</strong>{" "}
            {country.capital?.[0] ?? "N/A"}
          </p>

          <p>
            <strong>Languages:</strong>{" "}
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>

          <p>
            <strong>Currencies:</strong>{" "}
            {country.currencies
              ? Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")
              : "N/A"}
          </p>

          <p>
            <strong>Border Countries:</strong>{" "}
            {country.borders?.join(", ") ?? "None"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;