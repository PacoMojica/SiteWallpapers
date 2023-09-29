import { Lista_wallpapers } from "../NotionDatabase/ListaWallpapers";

export function obtenerWallpapers() {
  // debugger;
  var wallpaper = localStorage.getItem("Datos");
  if (wallpaper) {
    return JSON.parse(wallpaper);
  } else {
    return Lista_wallpapers;
  }
}
