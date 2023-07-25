import React from "react";
import "../Style/PostIconStyle.css";
import { Link } from "react-router-dom";

const TurkeyPostIcon = () => {
  return (
    <div className="box-container">
      <div
        className="box-post-icon"
        style={{ backgroundImage: "url(./img/TurkeyBackground.jpg)" }}
      >
        <div className="container">
          <div className="content">
            <div className="post-icon">
              <h3>Turkey</h3>
              <p>what should you try there</p>
              <button>
                <Link to="/blog/turkey">Read more</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurkeyPostIcon;
