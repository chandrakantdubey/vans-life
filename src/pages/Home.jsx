import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="row py-5 home">
      <h1 className="col home__title">
        You got the travel plans,
        <br />
        we got the travel vans.
      </h1>
      <p className="col-12 py-5 home__description">
        Add adventure to your life by joining the #vanlife movement.
        <br />
        Rent the perfect van to make your perfect road trip.
      </p>
      <Link className="col-8 home__btn justify-content-center m-auto" to="vans">
        Get your Vans
      </Link>
    </div>
  );
}
