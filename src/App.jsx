import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./components/404";
import Form from "./components/Form/Form";
import Contacto from "./components/Contacto";
import Anime from "./Site/Anime";
import { useState } from "react";
import { obtenerWallpapers } from "./components/OptenerWallpapers";
import { UnsplashAPI } from "./components/UnisplashApi";

function App() {
  const [wallpapers, setWallpapers] = useState(obtenerWallpapers());

  function ListaWallpapers(Data) {
    setWallpapers([...wallpapers, Data]);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home wallpapers={wallpapers} />} />
          <Route path="/Form" element={<Form Data={ListaWallpapers} />} />
          <Route path="/Anime" element={<Anime />} />
          {/* <Route path="/Contacto" element={<Contacto />} /> */}
          <Route path="/Unsplash" element={<UnsplashAPI />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
