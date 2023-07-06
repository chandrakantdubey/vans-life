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

import Home from "./pages/Home"
import About from "./pages/About"

import Error from "./components/Error"
import { Login, loader as loginLoader, action as loginAction} from "./pages/Login"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

import PageNotFound from "./components/PageNotFound"

import { Vans, loader as vansLoader } from "./pages/vans/Vans"
import { VanDetails, loader as vanLoader} from "./pages/vans/VanDetails"

import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import { HostVans, loader as hostVansLoader} from "./pages/host/HostVans"
import { HostVanDetail, loader as hostVanLoader} from "./pages/host/HostVanDetail"
import HostVanInfo from "./pages/host/HostVanInfo"
import HostVanPhotos from "./pages/host/HostVanPhotos"
import HostVanPricing from "./pages/host/HostVanPricing"


const router = createBrowserRouter(createRoutesFromChildren(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
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
        loader={async ({ request }) => await requireAuth(request)}
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