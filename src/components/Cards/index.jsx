import MapCards from "./MapCards";

function Cards({ lista }) {
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
