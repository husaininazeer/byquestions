import { Route } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const Routes = () => {
  return (
    <>
      <Route element={<App />} path="/" />
      <Route element={<ErrorPage />} path="*" />
    </>
  );
};

export default Routes;
