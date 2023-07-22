import React from "react";
import "../Style/PostIconStyle.css";

const ItalyPostIcon = () => {
  return (
    <div className="box-container">
      <div
        className="box-post-icon"
        style={{ backgroundImage: "url(./img/ItalyBackground.avif)" }}
      >
        <div className="container">
          <div className="content">
            <div className="post-icon">
              <h3>Italy</h3>
              <p>why you must travel there</p>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItalyPostIcon;
