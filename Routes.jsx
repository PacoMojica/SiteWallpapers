import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Error404 from "./src/components/404";
import Contacto from "./src/components/Contacto/Contacto";
import Anime from "./src/Site/Anime";
import Animales from "./src/Site/Animales/AnimalesList";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Contacto",
    element: <Contacto />,
  },
  // Routes de site
  {
    path: "/Anime",
    element: <Anime />,
  },
  // {
  //   path: "/Animales",
  //   element: <Animales />,
  // },
  {
    path: "/*",
    element: <Error404 />,
  },
];

export const router = createBrowserRouter(routes);
