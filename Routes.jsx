import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Error404 from "./src/components/404";

const routes = [
  // {
  //   path: "/",
  //   element: <App />,
  // },
  {
    path: "/*",
    element: <Error404 />,
  },
];

export const router = createBrowserRouter(routes);
