function MapAnime(props) {
  const { Img, UrlAnime, Nombre } = props.Animes;
  return (
    <>
      <div className="card d-inline-flex flex-wrap justify-content align-content-center">
        <img src={Img} className="card-img-top img" alt={Nombre} />
        <div className="card-body">
          <h5 className="card-title fs-5">{Nombre}</h5>
          <a href={UrlAnime} className="btn btn-primary">
            Download
          </a>
        </div>
      </div>
    </>
  );
}

export default MapAnime;
