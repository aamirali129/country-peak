import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

function Home() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search.trim()) {
      setCountries([]);
      setError("");
      return;
    }

    const timer = setTimeout(() => {
      fetchCountries();
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://restcountries.com/v3.1/name/${search}`
      );

      if (!response.ok) {
        throw new Error("No countries found");
      }

      const data = await response.json();

      setCountries(data);
    } catch (err) {
      setCountries([]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2>Country Search</h2>

      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <div className="countries-grid">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Home;