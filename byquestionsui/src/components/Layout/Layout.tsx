import { ReactElement } from "react";
import NavBar from "../NavBar/NavBar";
import "../Layout/layout.scss";

const Layout = (): ReactElement => {
  return (
    <>
      <div className="layout">
        <NavBar />
      </div>
    </>
  );
};

export default Layout;
