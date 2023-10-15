export function obtenerWallpapers() {
  var wallpaper = localStorage.getItem("Datos");
  if (wallpaper) {
    return JSON.parse(wallpaper);
  } else {
    // Aquí retornamos los wallpapers que estan en una lista o un componente que de el habiso de que a ocurido un error;
  }
}
