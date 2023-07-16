import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Error404 from "./src/components/404";
import Contacto from "./src/components/Contacto/Contacto";

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
    path: "/*",
    element: <Error404 />,
  },
];

export const router = createBrowserRouter(routes);
