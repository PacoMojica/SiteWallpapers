import Heder from "../Heder";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import CampoTexto from "./CampoTexto";
import Swal from "sweetalert2";

function Form(props) {
  const [NombreWallpaper, ActualizarNombreWallpaper] = useState("");
  const [UrlWallpaper, ActualizarUrlWallpaper] = useState("");
  const [DownloadWallpaper, ActualizarDownloadWallpaper] = useState("");
  const [NombreDeLaPersona, ActualizarNombreDeLaPersona] = useState("");

  const obtenerWallpapers = () => {
    var wallpaper = localStorage.getItem("Datos");
    if (wallpaper) {
      return JSON.parse(wallpaper);
    } else {
      return [];
    }
  };

  const [Datos, setDatos] = useState(obtenerWallpapers());

  function ManejandoEnvio(e) {
    e.preventDefault();
    let DatosAEnviar = {
      UrlWallpaper,
      DownloadWallpaper,
      NombreWallpaper,
      NombreDeLaPersona,
    };
    props.Data(setDatos([...Datos, DatosAEnviar]));
    mostrarAlerta();
    limpiarFormulario();
  }

  const mostrarAlerta = () => {
    Swal.fire({
      text: "Gracias por rellenar el formulario el wallpaper se añadio en el home",
      timer: "6000",
      timerProgressBar: true,
    });
  };

  function limpiarFormulario() {
    ActualizarNombreWallpaper("");
    ActualizarUrlWallpaper("");
    ActualizarDownloadWallpaper("");
    ActualizarNombreDeLaPersona("");
    document.getElementById("Form").reset();
  }

  useEffect(() => {
    localStorage.setItem("Datos", JSON.stringify(Datos));
  }, [Datos]);

  return (
    <>
      <h1 className="text-center fs-3 m-5">
        Este es el formulario para subir sus wallpapers
      </h1>
      <form onSubmit={ManejandoEnvio} id="Form" className="form m-5">
        <CampoTexto
          placeholder="NombreWallpaper"
          required
          valor={NombreWallpaper}
          actualizarValor={ActualizarNombreWallpaper}
        />
        <CampoTexto
          placeholder="NombreDeLaPersonaQueLoAñade"
          required
          valor={NombreDeLaPersona}
          actualizarValor={ActualizarNombreDeLaPersona}
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
