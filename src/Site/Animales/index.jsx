import Heder from "../../components/Heder";
import Footer from "../../components/Footer";

function Animales() {
  const Animal = AnimesList.map((Animes, index) => {
    return <MapAnime Animes={Animes} key={index} />;
  });
  return (
    <>
      <Heder />
      <h1 className="text-center">Anime</h1>
      <section>{Animal}</section>
      <Footer />
    </>
  );
}

export default Animales;
