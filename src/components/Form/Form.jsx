import Heder from "../Heder";
import Footer from "../Footer";
import { useState } from "react";
import CampoTexto from "./CampoTexto";
import Swal from "sweetalert2";

function Form(props) {
  const [NombreWallpaper, ActualizarNombreWallpaper] = useState("");
  const [UrlWallpaper, ActualizarUrlWallpaper] = useState("");
  const [DownloadWallpaper, ActualizarDownloadWallpaper] = useState("");

  function ManejandoEnvio(e) {
    e.preventDefault();
    let DatosAEnviar = {
      UrlWallpaper,
      DownloadWallpaper,
      NombreWallpaper,
    };
    props.datos(DatosAEnviar);
    mostrarAlerta();
  }
  const mostrarAlerta = () => {
    Swal.fire({
      text: "Gracias por rellenar el formulario el wallpaper se añadio en el home",
      timer: "6000",
      timerProgressBar: true,
    });
  };
  return (
    <>
      <h1 className="text-center fs-3 m-5">
        Este es el formulario para subir sus wallpapers
      </h1>
      <form onSubmit={ManejandoEnvio} className="form m-5">
        <CampoTexto
          placeholder="NombreWallpaper"
          required
          valor={NombreWallpaper}
          actualizarValor={ActualizarNombreWallpaper}
        />
        <CampoTexto
          placeholder="UrlWallpaper"
          required
          valor={UrlWallpaper}
          actualizarValor={ActualizarUrlWallpaper}
        />
        <CampoTexto
          placeholder="DownloadWallpaper"
          required
          valor={DownloadWallpaper}
          actualizarValor={ActualizarDownloadWallpaper}
        />
        <button
          onSubmit={ManejandoEnvio}
          id="btn-submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>

      <Heder />
      <Footer />
    </>
  );
}

export default Form;
