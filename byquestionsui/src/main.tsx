import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import "./index.scss";
import { default as MyRoutes } from "./Routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <MyRoutes />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
