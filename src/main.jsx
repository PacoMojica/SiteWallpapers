import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App";
import { QueryClientProvider } from "react-query";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
