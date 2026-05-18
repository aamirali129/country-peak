import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import FilterBar from "../components/FilterBar";

function Home() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [region, setRegion] = useState("");
  const [sortBy, setSortBy] = useState("");

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

      const encodedSearch = encodeURIComponent(
        search.trim()
      );

      const response = await fetch(
        `https://restcountries.com/v3.1/name/${encodedSearch}`
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

  const filteredCountries = countries.filter(
    (country) => {
      if (!region) return true;

      return country.region === region;
    }
  );

  const sortedCountries = [...filteredCountries].sort(
    (a, b) => {
      if (sortBy === "name") {
        return a.name.common.localeCompare(
          b.name.common
        );
      }

      if (sortBy === "population") {
        return b.population - a.population;
      }

      return 0;
    }
  );

  return (
    <div className="page">
      <h2>Country Search</h2>

      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <FilterBar
        region={region}
        setRegion={setRegion}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <div className="countries-grid">
        {sortedCountries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;