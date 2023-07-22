import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Lista_wallpapers } from "./components/Cards/ListaWallpapers";
import Home from "./components/Home";
import Error404 from "./components/404";
import Form from "./components/Form/Form";
import Contacto from "./components/Contacto";
import Anime from "./Site/Anime";

function App() {
  const [lista, actualizarLista] = useState(Lista_wallpapers);

  const containerWallpaper = (datos) => {
    actualizarLista([...lista, datos]);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home lista={lista} />} />
          <Route path="/Form" element={<Form datos={containerWallpaper} />} />
          <Route path="/Anime" element={<Anime />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
