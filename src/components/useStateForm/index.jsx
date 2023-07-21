import { useState } from "react";
import Lista_wallpapers from "../Cards/ListaWallpapers";

export const [lista, actualizarLista] = useState([Lista_wallpapers]);
export const containerWallpapers = (datos) => {
  actualizarLista([...lista, datos]);
};
