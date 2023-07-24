import MapCards from "./MapCards";

function Cards({ wallpapers }) {
  return (
    <>
      <section>
        {wallpapers.map((wallpapers, index) => {
          return <MapCards wallpapers={wallpapers} key={index} />;
        })}
      </section>
    </>
  );
}

export default Cards;
