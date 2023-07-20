import MapCards from "./MapCards";

function Cards(props) {
  const file = props.file;
  const Wallpaper = file.map((Wallpaper, index) => {
    return <MapCards Wallpaper={Wallpaper} key={index} />;
  });
  return (
    <>
      <section>{Wallpaper}</section>
    </>
  );
}

export default Cards;
