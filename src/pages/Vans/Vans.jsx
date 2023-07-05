import { Link, useSearchParams, useLoaderData } from "react-router-dom"
import { getVans } from "../../utils"

export function loader(){
  return getVans("/api/vans")
}

export default function Vans() {
  const vans = useLoaderData()

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')

  const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

  const vansEl = filteredVans.map((van) => {
    return (
      <div className="col-12 col-sm-6" key={van.id}>
        <div className="card p-2">
          <Link to={van.id} state={{search: `?${searchParams.toString()}`}}>
              <img src={van.imageUrl} alt={van.title} className="w-100" />
          </Link>
            <div className="card-body">
              <Link to={van.id} state={{search: searchParams.toString()}}>
                <h4 className="card-title">{van.name}</h4>
              </Link>
              <h5>${van.price} <span>/ day</span></h5>
              <button type="button" className={`type__btn ${van.type}`}>{van.type}</button>
            </div>
        </div>
      </div>
    )
  })

  return (
    <div className="row pt-5">
      <h1 className="fw-bold">Explore our van options</h1>
      <div className="vans__filter">
        <button
          onClick={()=>setSearchParams({type: "simple"})}
          className={`vans__filter-options ${typeFilter === "simple" ? "simple":""}`}
        >
          Simple
        </button>

        <button
          onClick={()=>setSearchParams({type: "luxury"})}
          className={`vans__filter-options ${typeFilter === "luxury" ?"luxury":""}`}
        >
          Luxury
        </button>

        <button
          onClick={()=>setSearchParams({type: "rugged"})}
          className={`vans__filter-options ${typeFilter === "rugged" ?"rugged" :""}`}
        >
          Rugged
        </button>
        {
          typeFilter ? (
            <button onClick={()=>setSearchParams({})} className="vans__filter-clear">← Clear filters</button>
          ) : null
        }
      </div>
      <div className="col vans__list py-4">
        <div className="row">
          {vansEl}
        </div>
      </div>
    </div>
  )
}
