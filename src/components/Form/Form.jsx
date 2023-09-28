import Footer from "../Footer";
import { useEffect, useState } from "react";
import CampoTexto from "./CampoTexto";
import Swal from "sweetalert2";
import { obtenerWallpapers } from "../OptenerWallpapers";
import { Header } from "../Header";

function Form({ Data }) {
  const [NombreWallpaper, ActualizarNombreWallpaper] = useState("");
  const [UrlWallpaper, ActualizarUrlWallpaper] = useState("");
  const [DownloadWallpaper, ActualizarDownloadWallpaper] = useState("");
  const [NombreDeLaPersona, ActualizarNombreDeLaPersona] = useState("");
  const [Creador, ActualizarCreador] = useState("");

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
      Creador,
    };
    setDatos([...Datos, DatosAEnviar]);
    Data([...Datos, DatosAEnviar]);
    MostrarAlerta();
    limpiarFormulario();
  }

  function MostrarAlerta() {
    Swal.fire({
      text: "Gracias por rellenar el formulario el walpaper esta en la pagina home",
      timer: "6000",
      timerProgressBar: true,
    });
  }

  function limpiarFormulario() {
    ActualizarNombreWallpaper("");
    ActualizarUrlWallpaper("");
    ActualizarDownloadWallpaper("");
    ActualizarNombreDeLaPersona("");
    ActualizarCreador("");
    document.getElementById("Form").reset();
  }

  return (
    <>
      <h1 className="text-center fs-3 m-5">
        Este es el formulario para subir sus wallpapers
      </h1>
      <p className="text-center">
        Lo que guardes en este formulario solo se guarda en tu dispositivo
      </p>
      <form onSubmit={ManejandoEnvio} id="Form" className="m-5">
        <CampoTexto
          placeholder="Nombre Wallpaper"
          required
          valor={NombreWallpaper}
          actualizarValor={ActualizarNombreWallpaper}
        />
        <CampoTexto
          placeholder="Nombre De La Persona Que Lo Añade"
          required
          valor={NombreDeLaPersona}
          actualizarValor={ActualizarNombreDeLaPersona}
        />
        <CampoTexto
          placeholder="Wallpaper"
          required
          valor={UrlWallpaper}
          actualizarValor={ActualizarUrlWallpaper}
        />
        <CampoTexto
          placeholder="Download Wallpaper"
          required
          valor={DownloadWallpaper}
          actualizarValor={ActualizarDownloadWallpaper}
        />

        <CampoTexto
          placeholder="Creador"
          required
          valor={Creador}
          actualizarValor={ActualizarCreador}
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

      <Header />
      <Footer />
    </>
  );
}

export default Form;
