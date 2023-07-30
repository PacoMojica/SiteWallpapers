import { useState } from "react";
import "./Cards.css";

function MapCards({ itemWallpapers }) {
  const {
    UrlWallpaper,
    DownloadWallpaper,
    NombreWallpaper,
    NombreDeLaPersona,
  } = itemWallpapers;
  // Estado del like
  const [Like, setLike] = useState(0);

  function OnLike() {
    setLike(Like + 1);
  }

  // Animación de img
  // const [AnimaciónImg, setAnimaciónImg] = useState(false);

  // function handleAnimación() {
  //   setAnimaciónImg(!AnimaciónImg);
  // }

  return (
    <>
      <div className="card d-inline-flex flex-wrap justify-content-center align-content-center">
        <img
          src={UrlWallpaper}
          style={{ width: "100%", height: "200px" }}
          // className={`box ${AnimaciónImg ? "scaled" : ""}`}
          // onMouseLeave={handleAnimación}
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
