import React from "react";
import Heder from "../../components/Heder";
import Footer from "../../components/Footer";
import AnimesList from "./AnimeList";
import MapAnime from "./MapAnime";

function Anime() {
  const Anime = AnimesList.map((Animes, index) => {
    return <MapAnime Animes={Animes} key={index} />;
  });
  return (
    <>
      <Heder />
      <h1 className="text-center">Anime</h1>
      <section>{Anime}</section>
      <Footer />
    </>
  );
}

export default Anime;
