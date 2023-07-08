import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../api";

export async function loader(){
  return await getVans("/api/vans")
}



export default function Home() {

  const vans = useLoaderData()

  const filteredVans = vans.filter(van => van.id <= 4)

  const vansEl = filteredVans.map((van) => {
    return (
      <div className="col-12 col-sm-6" key={van.id}>
        <div className="card p-2">
          <Link to={`vans/${van.id}`}>
              <img src={van.imageUrl} alt={van.title} className="w-100" />
          </Link>
            <div className="card-body">
              <Link to={van.id}>
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
    <>
      <main id="home">
        <div className="container py-5 app__wrapper">
          <div className="row mt-5">
            <h1 className="col home__title">
              You got the travel plans,
              <br />
              we got the travel vans.
            </h1>
          </div>

          <div className="row">
            <p className="col-12 home__description">
              Add adventure to your life by joining the #vanlife movement.
              <br />
              Rent the perfect van to make your perfect road trip.
            </p>
          </div>

          <div className="row mt-5 mb-5">
            <Link className="col-6 home__btn justify-content-center m-auto" to="vans">
              Get your Vans
            </Link>
          </div>
        </div>
      </main>
      <hr className="m-5"/>
      <div className="app__wrapper container">
        <div className="row">
          {
            vansEl
          }
        </div>
      </div>
    </>
  );
}
