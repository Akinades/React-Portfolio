import "./navbar.css";
import logo from "../../assets//logo_nav.png";

import MyLink from "./mylink";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div style={{ display: "flex" }}>
        <MyLink to="/">Home</MyLink>
        <MyLink to="/about">About</MyLink>
        <MyLink to="/projects">Projects</MyLink>
        <MyLink to="/contact">Contact</MyLink>
      </div>
    </nav>
  );
};

export default Navbar;
