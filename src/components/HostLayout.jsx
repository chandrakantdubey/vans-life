import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <div id="host">
      <div className="container app__wrapper py-4">
        <nav className="host__nav py-4">
          <NavLink
              end
              className={({ isActive }) => (isActive ? "active" : null)}
              to="."
              >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="income"
              >
              Income
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="vans"
              >
              Vans
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="reviews"
              >
              Reviews
            </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
