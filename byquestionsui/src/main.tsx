import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import "./index.scss";
import paths from "./paths.ts";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={paths.basePages.home} />
        <Route element={<Projects />} path={paths.basePages.projects} />
        <Route element={<About />} path={paths.basePages.about} />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
