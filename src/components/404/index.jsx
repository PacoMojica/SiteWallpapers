import "./404.css";
import image from "../../../public/img/404.gif";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="Error404">
      <div className="img_404">
        <img className="image-404 m-3" src={image} alt="404" />
      </div>
      {/* <p className="notfound-text">
        Esta página no existe o esta en mantenimiento
      </p> */}
      <p className="notfound-text">Esta pagina esta en proseso de creación</p>
      <Link to="/" className="btnHome btn btn-secondary m-3">
        Home
      </Link>
    </div>
  );
}

export default Error404;
