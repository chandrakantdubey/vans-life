import { Link, NavLink } from "react-router-dom";
import login from '../assets/user-icon.png'

export default function Header() {
  return (
    <header className="row align-items-center py-3">
      <Link to="/" className="col header__brand">
        #VansLife
      </Link>
      <nav className="col navbar navbar-expand-sm">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav d-flex gap-2 ms-auto">
            <NavLink to="host" className={({isActive}) => isActive ? `active nav-item nav-link`: `nav-item nav-link`}>Host</NavLink>
            <NavLink to="about" className={({isActive}) => isActive ? `active nav-item nav-link`: `nav-item nav-link`}>About</NavLink>
            <NavLink to="vans" className={({isActive}) => isActive ? `active nav-item nav-link`: `nav-item nav-link`}>Vans</NavLink>
            <NavLink to="login" className={({isActive}) => isActive ? `active nav-item nav-link`: `nav-item nav-link`}>
              <img src={login} alt="user icon" />
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
