import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

import paths from "../../paths";

const Navbar = (): ReactElement => {
  return (
    <div className="navbar">
      <div className="aynLogo">
        <Link to={paths.basePages.home}>ع</Link>
      </div>
      <Link to={paths.basePages.about}>about</Link>
      <Link to={paths.basePages.projects}>projects</Link>
      <Link to={paths.basePages.blog}>blog</Link>
      <Link to={paths.basePages.contact}>contact</Link>
    </div>
  );
};

export default Navbar;
