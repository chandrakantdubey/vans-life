import { Link } from "react-router-dom";
import logo from "../images/logog.png";
import { NavLink } from "react-router-dom";

function Header() {
  const navStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "£161616",
  };
  return (
    <div className="header">
      <div className="navbar">
        <Link to="/">
          <img src={logo} className="navbar--logo" />
        </Link>
        <div className="navbar--menu">
          <NavLink
            style={({ isActive }) => (isActive ? navStyle : null)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? navStyle : null)}
            to="/vans"
          >
            Vans
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? navStyle : null)}
            to="/host"
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
