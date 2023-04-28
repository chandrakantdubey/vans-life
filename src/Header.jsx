import { Link } from "react-router-dom";
import logo from "./images/logog.png";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <Link to="/">
          <img src={logo} className="navbar--logo" />
        </Link>
        <div className="navbar--menu">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
