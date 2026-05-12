import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>CountryPeek</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>
    </header>
  );
}

export default Header;