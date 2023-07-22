import MapCards from "./MapCards";

function Cards(props) {
  const lista = props.lista;
  return (
    <>
      <section>
        {lista.map((Wallpaper, index) => {
          return <MapCards Wallpaper={Wallpaper} key={index} />;
        })}
      </section>
    </>
  );
}

export default Cards;
