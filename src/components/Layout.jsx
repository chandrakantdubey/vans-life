import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="container-md app__wrapper">
      <Header />
      <Outlet />
    </div>
  );
}
