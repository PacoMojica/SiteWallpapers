import { useEffect, useState } from "react";
import { Lista_wallpapers } from "../Cards/ListaWallpapers";
import App from "../../App";

export function LocalStorage({ Datos, setDatos }) {
  const obtenerWallpapers = () => {
    var wallpaper = localStorage.getItem("Datos");
    if (wallpaper) {
      return JSON.parse(wallpaper);
    } else {
      return Lista_wallpapers;
    }
  };

  const [Datos, setDatos] = useState(obtenerWallpapers());

  useEffect(() => {
    localStorage.setItem("Datos", JSON.stringify(Datos));
  }, [Datos]);
  setDatos(...Datos);
  return (
    <>
      <App Datos={Datos} />
    </>
  );
}
