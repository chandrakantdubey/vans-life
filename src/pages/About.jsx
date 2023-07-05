import aboutBg from "../assets/about--hero.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="row about">
      <div className="col-12 px-0">
        <img src={aboutBg} alt="about hero section" className="col-12 p-0" />
      </div>
      <main className="py-4 col-12">
        <h1 className="about__title">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="">
          Our mission is to enliven your road trip with the perfect travel van
          rental.
          <br />
          Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
          <br />
          (Hitch costs extra 😉)
        </p>
        <p className="">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about__card mt-5 mb-3 p-5 d-flex flex-column align-item-start">
          <h2 className="about__card-title">
            Your destination is waiting.
            <br />
            Your van is ready zooom.
          </h2>
          <Link to="/vans" className="mt-3 about__card-btn py-3 px-4">
            Explore our vans
          </Link>
        </div>
      </main>
    </div>
  );
}
