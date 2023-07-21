import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Error404 from "./src/components/404";
import Contacto from "./src/components/Contacto/Contacto";
import Anime from "./src/Site/Anime";
import Form from "./src/components/Form/Form";
import { containerWallpapers, lista } from "./src/components/useStateForm";

const routes = [
  {
    path: "/",
    element: <App file={lista} />,
  },
  {
    path: "/Form",
    element: <Form datos={containerWallpapers} />,
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
    path: "/*",
    element: <Error404 />,
  },
];

export const router = createBrowserRouter(routes);
