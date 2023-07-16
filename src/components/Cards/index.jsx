import Lista_wallpapers from "./ListaWallpapers";
import MapCards from "./MapCards";

function Cards() {
  const Wallpaper = Lista_wallpapers.map((Wallpaper, index) => {
    return <MapCards Wallpaper={Wallpaper} key={index} />;
  });
  return (
    <>
      <section>{Wallpaper}</section>
    </>
  );
}

export default Cards;
