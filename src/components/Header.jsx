import { Link, NavLink } from "react-router-dom";
import login from '../assets/user-icon.png'

export default function Header() {
  return (
    <header className="container-fluid navbar navbar-expand-md app__wrapper align-items-center py-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          #VansLife
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <nav className="navbar-nav ms-auto">
            <NavLink to="host" className={({isActive}) => isActive ? `active nav-item nav-link m-auto`: `nav-item nav-link m-auto`}>Host</NavLink>
            <NavLink to="about" className={({isActive}) => isActive ? `active nav-item nav-link m-auto`: `nav-item nav-link m-auto`}>About</NavLink>
            <NavLink to="vans" className={({isActive}) => isActive ? `active nav-item nav-link m-auto`: `nav-item nav-link m-auto`}>Vans</NavLink>
            <NavLink to="login" className={({isActive}) => isActive ? `active nav-item nav-link m-auto`: `nav-item nav-link m-auto`}>
              <img src={login} alt="user icon" />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
