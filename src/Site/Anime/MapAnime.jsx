function MapAnime(props) {
  const { Img, UrlAnime, Nombre } = props.Animes;
  return (
    <>
      <a href={UrlAnime}>
        <img src={Img} className="card-img-top card-image" alt={Nombre} />
      </a>
    </>
  );
}

export default MapAnime;
