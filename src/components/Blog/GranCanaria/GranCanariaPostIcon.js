import React from "react";
import "../Style/PostIconStyle.css";
import { Link } from "react-router-dom";

const GranCanariaPostIcon = () => {
  return (
    <div className="box-container">
      <div
        className="box-post-icon"
        style={{ backgroundImage: "url(./img/GranCanaraiaBackground.avif)" }}
      >
        <div className="container">
          <div className="content">
            <div className="post-icon">
              <h3>Gran Canaria</h3>
              <p>5 of the best places to vist</p>
              <button>
                <Link to="/blog/grancanaria">Read more</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GranCanariaPostIcon;
