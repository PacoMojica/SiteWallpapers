import React from "react";
import Footer from "../../components/Footer";
import AnimesList from "./AnimeList";
import MapAnime from "./MapAnime";
import { Header } from "../../components/Header";

function Anime() {
  const Anime = AnimesList.map((Animes, index) => {
    return <MapAnime Animes={Animes} key={index} />;
  });
  return (
    <>
      <Header />
      <h1 className="text-center">Anime</h1>
      <section>{Anime}</section>
      <Footer />
    </>
  );
}

export default Anime;
