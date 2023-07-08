import { Link, useLocation, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"

export function loader({ params }) {
  return getVans("/api/vans/" + params.id)
}

export function VanDetails() {
  const location = useLocation()
  const van = useLoaderData()

  const search = location.state?.search || ""
  const type = location.state?.type || 'all'
  console.log(search)
  console.log(type)

  return (
    <div id="vandetails">
      <div className="container app__wrapper van__detail py-4">
        <div className="col-12 py-4">
          {van && (
            <Link className="vans__filter-clear" to={`..${search}`} relative="path">
              ← Return to {type} vans
            </Link>
          )}
        </div>
          {van ? (
              <div className="col-12 py-4">
                <img
                  src={van.imageUrl}
                  alt="${van.name}"
                  className="w-100"
                />
                <button className={`colr-12 type__btn ${van.type} mt-4 mb-3`}>{van.type}</button>
                <h1 className="van--detail_name">{van.name}</h1>
                <h2 className="van--detail_price">
                  ${van.price}
                  <span> / day</span>
                </h2>
                <p className="van--detail_description">{van.description}</p>
                <button className="van__btn">Rent this van</button>
              </div>
          ) : (
            <h1>Loading...</h1>
          )}
      </div>
    </div>
  )
}
