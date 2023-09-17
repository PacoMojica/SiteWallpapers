import Heder from "../Heder";
import "./404.css";
import image from "/Img/404.gif";

function Error404() {
  return (
    <div className="Error404">
      <div className="img_404">
        <img className="image-404 m-3" src={image} alt="404" />
      </div>
      <p className="notfound-text">
        Esta página no existe o esta en mantenimiento
      </p>
      {/* <p className="notfound-text">Esta pagina esta en proseso de creación</p> */}
      <Heder />
    </div>
  );
}

export default Error404;
