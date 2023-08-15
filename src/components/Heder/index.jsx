import { Link } from "react-router-dom";
import "./Heder.css";

function Heder() {
  return (
    <>
      <nav className="menu navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand text-black fs-5" to="/">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fs-5">
                <Link
                  to="/"
                  className="nav-link active text-black"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Anime" className="nav-link active text-black fs-5">
                  Anime
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Form" className="nav-link active text-black fs-5">
                  Formulario
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Unsplash"
                  className="nav-link active text-black fs-5"
                >
                  Unsplash
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Contacto"
                  className="nav-link active text-black fs-5"
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
