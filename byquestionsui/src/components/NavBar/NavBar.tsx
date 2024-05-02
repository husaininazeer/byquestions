import { ReactElement } from "react";
import "./NavBar.scss";

const Navbar = (): ReactElement => {
  return (
    <div className="navbar">
      <div className="aynLogo">
        <a href="">ع</a>
      </div>
      <a href="">about</a>
      <a href="">projects</a>
      <a href="">blog</a>
      <a href="">contact</a>
    </div>
  );
};

export default Navbar;
