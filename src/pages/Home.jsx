import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home--hero">
        <h1 className="home--hero_title">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="home--hero_introtext">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans">
          <button className="btn home--hero_btnfind">Find your van</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
