function MapAnime(props) {
  const { Img, UrlAnime, Nombre } = props.Animes;
  return (
    <>
      <div className="card-wallpaper">
        <div className="face front">
          <img className="card-img-top card-image" src={Img} alt={Nombre} />
          <h5>{Nombre}</h5>
        </div>

        <div className="face back">
          <h5>{Nombre}</h5>
          <div className="link">
            <a
              href={UrlAnime}
              target="_blank"
              className="btn btn-outline-secondary
              m-2"
            >
              Download
            </a>

            <a href={Img} target="_blank" className="btn btn-outline-secondary">
              Ver Wallpaper
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MapAnime;
