function FilterBar({
  region,
  setRegion,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="filter-bar">
      <select
        value={region}
        onChange={(e) =>
          setRegion(e.target.value)
        }
      >
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
      >
        <option value="">Sort By</option>

        <option value="name">
          Name (A–Z)
        </option>

        <option value="population">
          Population (High–Low)
        </option>
      </select>
    </div>
  );
}

export default FilterBar;