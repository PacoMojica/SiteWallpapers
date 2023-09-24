import { MapCards } from "./MapCards";

function Cards({ wallpapers }) {
  return (
    <>
      <section>
        {wallpapers.map((itemWallpapers, index) => (
          <MapCards itemWallpapers={itemWallpapers} key={index} />
        ))}
      </section>
    </>
  );
}

export default Cards;
