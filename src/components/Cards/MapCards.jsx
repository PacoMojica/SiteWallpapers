import "./Cards.css";

function MapCards(props) {
  const {
    UrlWallpaper,
    DownloadWallpaper,
    NombreWallpaper,
    NombreDeLaPersona,
  } = props.lista;
  return (
    <>
      <div className="card d-inline-flex flex-wrap justify-content-center align-content-center">
        <img
          src={UrlWallpaper}
          className="card-img-top img"
          alt={NombreWallpaper}
        />
        <div className="card-body">
          <h5 className="card-title fs-5">{NombreWallpaper}</h5>
          <p>Persona que agrego el wallpaper: {NombreDeLaPersona}</p>
          <a
            href={DownloadWallpaper}
            className="btn btn-primary"
            target="_Black"
          >
            Download
          </a>
        </div>
      </div>
    </>
  );
}

export default MapCards;
