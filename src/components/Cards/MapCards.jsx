function MapCards({ itemWallpapers }) {
  const {
    UrlWallpaper,
    DownloadWallpaper,
    NombreWallpaper,
    NombreDeLaPersona,
  } = itemWallpapers;

  return (
    <>
      <a href={DownloadWallpaper}>
        <img
          className="card-img-top card-image"
          src={UrlWallpaper}
          alt={NombreWallpaper}
        />
      </a>
    </>
  );
}

export default MapCards;
