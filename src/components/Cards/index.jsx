import MapCards from "./MapCards";

function Cards(props) {
  const lista = props.lista;
  return (
    <>
      <section>
        {lista.map((lista, index) => {
          return <MapCards lista={lista} key={index} />;
        })}
      </section>
    </>
  );
}

export default Cards;
