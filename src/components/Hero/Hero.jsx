import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure education for a better world</h1>
        <p>
          Our aim is to provide quality education at an affordable price. The
          courses are designed by experts with years of experience so that you
          can learn anytime, anywhere. Our graduates are empowered with
          knowledge and skills needed to excel in their respective fields.
        </p>
        <Link to="programs" smooth={true} offset={-50} duration={500}>
          <button className="btn explore-btn">
            Explore more <span className="scroll-emoji">⬇</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
