import "./Cards.css";

function MapCards(props) {
  const { Img, UrlWallpaper, NombreWallpaper } = props.Wallpaper;
  return (
    <>
      <div className="card d-inline-flex flex-wrap justify-content align-content-center">
        <img src={Img} className="card-img-top img" alt={NombreWallpaper} />
        <div className="card-body">
          <h5 className="card-title fs-5">{NombreWallpaper}</h5>
          <a href={UrlWallpaper} className="btn btn-primary" target="_Black">
            Download
          </a>
        </div>
      </div>
    </>
  );
}

export default MapCards;
