import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">🛍️ Mi Tienda</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Todos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categoria/remeras">Remeras</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categoria/pantalones">Pantalones</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categoria/zapatillas">Zapatillas</Link></li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
