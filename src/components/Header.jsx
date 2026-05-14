import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <header className="header">
      <h1>CountryPeek</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>

      <button onClick={toggleTheme}>
        {theme === "light"
          ? "Dark Mode"
          : "Light Mode"}
      </button>
    </header>
  );
}

export default Header;