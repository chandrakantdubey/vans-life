import { createBrowserRouter, createRoutesFromChildren, RouterProvider, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "./App.css";
import "./server";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetails, {loader as vanLoader} from "./pages/vans/VanDetails";
import Layout from "./components/Layout";
import Host from "./pages/host/Host";
import HostLayout from "./components/HostLayout";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans, {loader as hostVansLoader} from "./pages/host/HostVans";
import HostVansDetail, {loader as hosVanLoader} from "./pages/host/HostVansDetail";
import Footer from "./components/Footer";
import HostVansInfo from "./pages/host/HostVansInfo";
import HostVansPhotos from "./pages/host/HostVansPhotos";
import HostVansPricing from "./pages/host/HostVansPricing";
import PageNotFound from "./components/PageNotFound";
import Error from "./components/Error";
import Login from "./pages/Login";


const router = createBrowserRouter(createRoutesFromChildren(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />

    <Route path="login" element={<Login />} />

    <Route
      path="vans"
      element={<Vans />}
      loader={vansLoader}
      errorElement={<Error />}
    />

    <Route
      path="vans/:id"
      element={<VanDetails />}
      loader={vanLoader}
    />
    <Route path="host" element={<HostLayout />}>
      <Route index element={<Host />} />
      <Route path="income" element={<Income />} />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route path="vans/:id" element={<HostVansDetail />} >
        <Route index element={<HostVansInfo />} />
        <Route path="photos" element={<HostVansPhotos />} />
        <Route path="pricing" element={<HostVansPricing />} />
      </Route>
      <Route path="reviews" element={<Reviews />} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Route>
))

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}