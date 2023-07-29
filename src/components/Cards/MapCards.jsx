import { useState } from "react";
import "./Cards.css";

function MapCards(props) {
  const {
    UrlWallpaper,
    DownloadWallpaper,
    NombreWallpaper,
    NombreDeLaPersona,
  } = props.Wallpaper;

  const [Like, setLike] = useState(0);

  function OnLike() {
    setLike(Like + 1);
  }

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
          <i className="bi bi-heart m-4 fs-4" onClick={OnLike} />
          <p>Likes {Like}</p>
        </div>
      </div>
    </>
  );
}

export default MapCards;
