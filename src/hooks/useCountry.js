import { useEffect, useState } from "react";

function useCountry(code) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!code) return;

    const fetchCountry = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}`
        );

        if (!response.ok) {
          throw new Error("Country not found");
        }

        const data = await response.json();

        setCountry(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [code]);

  return { country, loading, error };
}

export default useCountry;