import Heder from "../Heder";
import Footer from "../Footer";
import "./Form.css";
import { useState } from "react";

function Form(props) {
  function manejarCambio(e) {
    props.actualizarValor(e.target.value);
  }

  const [Nombre, actualizarNombre] = useState("");
  const [Img, actualizarImg] = useState("");
  const [UrlWallpaper, actualizarUrlWallpaper] = useState("");

  function ManejandoEnvio(evet) {
    evet.preventDefault();
    let datosAEnviar = {
      Nombre,
      Img,
      UrlWallpaper,
    };
    props.datos(datosAEnviar);
  }

  return (
    <>
      <form onSubmit={ManejandoEnvio} className="form m-5">
        <fieldset>
          <legend>Este es el formulario para añadir wallpapers</legend>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              valor={Nombre}
              value={manejarCambio}
              actualizarNombre={actualizarNombre}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Img</label>
            <input
              type="text"
              valor={Img}
              actualizarImg={actualizarImg}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Url Wallpaper</label>
            <input
              type="text"
              valor={UrlWallpaper}
              actualizarUrlWallpaper={actualizarUrlWallpaper}
              className="form-control"
            />
          </div>
          <button onSubmit={ManejandoEnvio} className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
      <Heder />
      <Footer />
    </>
  );
}

export default Form;
