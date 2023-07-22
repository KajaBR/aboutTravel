import React from "react";
import "../Style/PostIconStyle.css";

const MaltaPostIcon = () => {
  return (
    <div className="box-container">
      <div
        className="box-post-icon"
        style={{ backgroundImage: "url(./img/MaltaBackground.avif)" }}
      >
        <div className="container">
          <div className="content">
            <div className="post-icon">
              <h3>Malta</h3>
              <p>the best moment to travel there</p>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaltaPostIcon;
