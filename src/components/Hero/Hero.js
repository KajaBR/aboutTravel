import React from "react";
import "./HeroStyle.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h2>Travel blog</h2>
          <div>
            <button>
              <Link to="/blog">Read more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
