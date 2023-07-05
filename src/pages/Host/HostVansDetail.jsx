import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import { getVans } from "../../utils"

export function loader({params}){
    return getVans('/api/host/vans' + params.id)
}

export default function HostVansDetail() {
    const currentVan = useLoaderData()

    if(!currentVan){
        return <h2 className="text-center">Loading van details...</h2>
    }

    return (
        <section>
            <div className="mb-4">
                <Link
                    to='..'
                    relative="path"
                >
                    &larr; <span>Back to all vans</span>
                </Link>
            </div>
            <div className="p-4 host__van-detail rounded-4">
                <div className="d-flex gap-4">
                    <img src={currentVan.imageUrl} className="rounded-4 width-fluid" />
                    <div className="align-self-center">
                        <button
                            className={`vans__filter-options ${currentVan.type}`}
                        >
                            {currentVan.type}
                        </button>
                        <h3 className="fw-bold my-1">{currentVan.name}</h3>
                        <h5>${currentVan.price}/day</h5>
                    </div>
                </div>

                <nav className="d-flex gap-3 py-4">
                    <NavLink
                        to="."
                        end
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}