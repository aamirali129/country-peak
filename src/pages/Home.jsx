import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="page">
      <h2>Home Page</h2>

      <input
  type="text"
  placeholder="Search countries..."
  aria-label="Search countries"
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  />

      <p>Searching for: {search}</p>
    </div>
  );
}

export default Home;