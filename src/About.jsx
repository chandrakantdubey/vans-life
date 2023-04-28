import aboutbg from "./images/about-hero.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about--intro">
        <img src={aboutbg} alt="about hero" className="about--hero_image" />
        <div className="about--hero">
          <h1 className="about--hero_title">
            Don't squeeze in a sedan when you could relax in a van.
          </h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
            <br />
            (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
      </div>
      <div className="about--explore">
        <h2 className="about--explore_title">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link to="/vans">
          <button className="btn about--explore_btn">Explore our vans</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
