import { ReactElement } from "react";
import NavBar from "../NavBar/NavBar";
import "../Layout/Layout.scss";

interface LayoutProps {
  children: ReactElement[] | ReactElement;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <>
      <div className="layout">
        <NavBar />
        {children}
      </div>
    </>
  );
};

export default Layout;
