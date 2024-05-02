import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
