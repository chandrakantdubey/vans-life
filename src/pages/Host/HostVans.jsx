import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({request}){
  await requireAuth(request)
  return getVans('/api/host/vans')
}

export function HostVans() {
  const vans = useLoaderData()

  const vansElem = vans ? vans.map(van=>{
    return(
      <Link
        to={van.id}
        key={van.id}
      >
        <div className="host__van d-flex gap-3 py-3 px-3 rounded-2">
          <img src={van.imageUrl} alt={van.name} className="host__van-img rounded-2" />
          <div className="host__van-details">
            <h3>{van.name}</h3>
            <p>${van.price} / day</p>
          </div>
        </div>
      </Link>
    )
  }) : <p>Failed to Fetch</p>

  return(
    <div className="host__vans pt-4">
      <h2 className="fw-bold">Your listed vans</h2>
      {
        vans ?
          (
            <div className="host__vans-list d-flex flex-column gap-4 py-4">
              {vansElem}
            </div>
          ) :
          (
            <h2 className="text-center">Loading vans ...</h2>
          )
      }
    </div>
  )
}
