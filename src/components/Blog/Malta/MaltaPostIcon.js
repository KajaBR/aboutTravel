import React from "react";
import "../Style/PostIconStyle.css";
import { Link } from "react-router-dom";

const MaltaPostIcon = () => {
  return (
    <div className="box-container">
      <div
        className="box-post-icon"
        style={{ backgroundImage: "url(./img/MaltaBackground.jpg)" }}
      >
        <div className="container">
          <div className="content">
            <div className="post-icon">
              <h3>Malta</h3>
              <p>The best moment to travel there</p>
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

export default MaltaPostIcon;
