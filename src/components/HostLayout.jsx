import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function HostLayout() {
  const navStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "£161616",
  };
  return (
    <>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? navStyle : null)}
          end
          to="/host"
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? navStyle : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? navStyle : null)}
          to="/host/vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? navStyle : null)}
          to="/host/income"
        >
          Income
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
