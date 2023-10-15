import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

export function Header() {
  // // manipulación del menu del celular
  const [menu, mostrar] = useState(false);

  const toggleMenu = () => {
    mostrar(!menu);
  };

  return (
    <div className="contenedor">
      <header id="container-nav">
        <a href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD09Q5nPknXky1Yb6jsKFO0NmgFwb7xjAoJg&usqp=CAU"
            alt="logo"
            className="logo-img"
          />
        </a>

        <label className="burger">
          <input type="checkbox" id="burger" onClick={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav id="menu" className={`menu ${menu ? "mostrar" : ""}`}>
          <ul>
            <li>
              <a href="/" className="nav-link active text-white">
                Home
              </a>
            </li>

            <li>
              <Link to="/Form" className="nav-link active  fs-5 text-white">
                Formulario
              </Link>
            </li>

            <li>
              <Link to="/Anime" className="nav-link active  fs-5 text-white">
                Anime
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
