import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure education for a better world</h1>
        <p>
          Our aim is to provide quality education at affordable price. The
          courses are designed by experts with years of experience so that you
          can learn anytime, anywhere. Our graduates are empowered with
          knowledge and skills needed to be excel in their respective fields.
        </p>
        <button className="btn ">
          {" "}
          Explore more <img src={dark_arrow} alt="arrow right icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
