import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Error404 from "./src/components/404";
import Contacto from "./src/components/Contacto/Contacto";
import Anime from "./src/Site/Anime";
import Form from "./src/components/Form/Form";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Contacto",
    element: <Contacto />,
  },
  {
    path: "/Anime",
    element: <Anime />,
  },
  // {
  //   path: "/Form",
  //   element: <Form />,
  // },
  {
    path: "/*",
    element: <Error404 />,
  },
];

export const router = createBrowserRouter(routes);
