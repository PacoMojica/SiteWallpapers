export function MapCards({ itemWallpapers }) {
  const {
    UrlWallpaper,
    DownloadWallpaper,
    NombreWallpaper,
    NombreDeLaPersona,
    Description,
  } = itemWallpapers;

  return (
    <>
      <div className="card-wallpaper">
        <div className="face front">
          <img
            className="card-img-top card-image"
            src={UrlWallpaper}
            alt={NombreWallpaper}
          />
          <h5>{NombreWallpaper}</h5>
        </div>

        <div className="face back">
          <h6>Nombre de la persona: {NombreDeLaPersona}</h6>
          <p>{Description}</p>
          <div className="link">
            <a
              href={DownloadWallpaper}
              target="_blank"
              className="btn btn-outline-secondary
              m-2"
            >
              Download
            </a>

            <a
              href={UrlWallpaper}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Ver Wallpaper
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
