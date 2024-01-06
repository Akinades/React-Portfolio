import "./navbar.css";
import logo from "../../assets//logo_nav.png";

import MyLink from "./mylink";
const Navbar = () => {
  const linkCV =
    "https://www.canva.com/design/DAFNzzky5WI/XVWwGwkbbCZoMk0B7Dro_Q/view?utm_content=DAFNzzky5WI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink";
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div style={{ display: "flex" }}>
        <MyLink to="/">Home</MyLink>
        <MyLink to="/about">About</MyLink>
        <MyLink to="/projects">Projects</MyLink>
        <MyLink to="/contact">Contact</MyLink>
        <MyLink to={linkCV}>CV</MyLink>
      </div>
    </nav>
  );
};

export default Navbar;
