import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./components/404";
import Form from "./components/Form/Form";
import Contacto from "./components/Contacto";
import Anime from "./Site/Anime";
import { Lista_wallpapers } from "./components/Cards/ListaWallpapers";

function App() {
  const [lista, actualizarLista] = useState(Lista_wallpapers);

  function containerWallpaper(Data) {
    actualizarLista(...lista, Data);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home lista={lista} />} />
          <Route path="/Form" element={<Form Data={containerWallpaper} />} />
          <Route path="/Anime" element={<Anime />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
