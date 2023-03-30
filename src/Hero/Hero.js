import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6 className="hero-subtitle">Welcom To Cyborg</h6>
        <h4 className="hero-title">
          <em>Browse</em> Our Popular Games Here
        </h4>
        <div className="main-button btn rounded">
          <a href="browse.html">Browse Now</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// btn rounded btn-primary btn-lg btn-block
