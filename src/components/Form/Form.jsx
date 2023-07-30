import Heder from "../Heder";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import CampoTexto from "./CampoTexto";
import Swal from "sweetalert2";
import { obtenerWallpapers } from "../OptenerWallpapers";

function Form({ Data }) {
  const [NombreWallpaper, ActualizarNombreWallpaper] = useState("");
  const [UrlWallpaper, ActualizarUrlWallpaper] = useState("");
  const [DownloadWallpaper, ActualizarDownloadWallpaper] = useState("");
  const [NombreDeLaPersona, ActualizarNombreDeLaPersona] = useState("");

  const [Datos, setDatos] = useState();

  useEffect(() => {
    if (!Datos) {
      const wallpapers = obtenerWallpapers();
      setDatos(wallpapers);
      Data(wallpapers);
    }
  }, []);

  useEffect(() => {
    if (Datos) {
      localStorage.setItem("Datos", JSON.stringify(Datos));
    }
  }, [Datos]);

  function ManejandoEnvio(e) {
    e.preventDefault();
    let DatosAEnviar = {
      UrlWallpaper,
      DownloadWallpaper,
      NombreWallpaper,
      NombreDeLaPersona,
    };
    setDatos([...Datos, DatosAEnviar]);
    Data([...Datos, DatosAEnviar]);
    MostrarAlerta();
    limpiarFormulario();
  }
  function MostrarAlerta() {
    Swal.fire({
      text: "Gracias por rellenar el formulario",
      timer: "6000",
      timerProgressBar: true,
    });
  }

  function limpiarFormulario() {
    ActualizarNombreWallpaper("");
    ActualizarUrlWallpaper("");
    ActualizarDownloadWallpaper("");
    ActualizarNombreDeLaPersona("");
    document.getElementById("Form").reset();
  }

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
        <div className="d-flex">
          <button
            onSubmit={ManejandoEnvio}
            id="btn-submit"
            className="btn btn-primary m-2"
          >
            Subir
          </button>
          <button onClick={limpiarFormulario} className="btn btn-primary m-2">
            limpiarFormulario
          </button>
        </div>
      </form>

      <Heder />
      <Footer />
    </>
  );
}

export default Form;
