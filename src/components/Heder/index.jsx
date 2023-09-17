import { Link } from "react-router-dom";
import "./Heder.css";

function Heder() {
  return (
    <>
      <nav className="menu navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand fs-5 text-white" to="/">
            Wallpapers
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fs-5">
                <Link to="/" className="nav-link active text-white">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Anime" className="nav-link active  fs-5 text-white">
                  Anime
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Form" className="nav-link active  fs-5 text-white">
                  Formulario
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Unsplash"
                  className="nav-link active  fs-5 text-white"
                >
                  Unsplash
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Vector-forest"
                  className="nav-link active  fs-5 text-white"
                >
                  Vector forest
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="https://luisangelponcealvarez.netlify.app/Contact"
                  className="nav-link active  fs-5 text-white"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Heder;
