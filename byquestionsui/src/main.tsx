import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import "./index.scss";
import paths from "./paths.ts";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={paths.basePages.home} />
        <Route element={<About />} path={paths.basePages.about} />
        <Route element={<Projects />} path={paths.basePages.projects} />
        <Route element={<Blog />} path={paths.basePages.blog} />
        <Route element={<Contact />} path={paths.basePages.contact} />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
