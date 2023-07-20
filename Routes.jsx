import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Error404 from "./src/components/404";
import Contacto from "./src/components/Contacto/Contacto";
import Anime from "./src/Site/Anime";
import Form from "./src/components/Form/Form";
import { useState } from "react";
import Lista_wallpapers from "./src/components/Cards/ListaWallpapers";

const [lista, actualizarLista] = useState(Lista_wallpapers);
const containerWallpapers = (datos) => {
  actualizarLista([...lista, datos]);
};

const routes = [
  {
    path: "/",
    element: <App file={lista} />,
  },
  {
    path: "/Contacto",
    element: <Contacto />,
  },
  {
    path: "/Anime",
    element: <Anime />,
  },
  {
    path: "/Form",
    element: <Form datos={containerWallpapers} />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
];

export const router = createBrowserRouter(routes);
