import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route
} from "react-router-dom"

import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "./App.css"
import "./server"

import { requireAuth } from "./utils"

import Home, {loader as homeLoader} from "./pages/Home"
import About from "./pages/About"

import Error from "./components/Error"
import { Login, loader as loginLoader, action as loginAction} from "./pages/Login"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

import PageNotFound from "./components/PageNotFound"

import { Vans, loader as vansLoader } from "./pages/vansPage/Vans"
import { VanDetails, loader as vanLoader} from "./pages/vansPage/VanDetails"

import Dashboard, {loader as dashboardLoader} from "./pages/hostPage/Dashboard"
import Income from "./pages/hostPage/Income"
import Reviews from "./pages/hostPage/Reviews"
import { HostVans, loader as hostVansLoader} from "./pages/hostPage/HostVans"
import { HostVanDetail, loader as hostVanLoader} from "./pages/hostPage/HostVanDetail"
import HostVanInfo from "./pages/hostPage/HostVanInfo"
import HostVanPhotos from "./pages/hostPage/HostVanPhotos"
import HostVanPricing from "./pages/hostPage/HostVanPricing"


const router = createBrowserRouter(createRoutesFromChildren(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} loader={homeLoader} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      loader={loginLoader}
      action={loginAction}
    />

    {/* vans */}
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
      errorElement={<Error />}
      />

    {/* host */}
    <Route path="host" element={<HostLayout />}>
      <Route
        index
        element={<Dashboard />}
        loader={dashboardLoader}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      {/* host van details */}
      <Route
        path="vans/:id"
        element={<HostVanDetail />}
        loader={hostVanLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
          loader={async ({ request }) => await requireAuth(request)}
        />
      </Route>
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}