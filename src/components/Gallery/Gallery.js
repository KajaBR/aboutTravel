import React from "react";
import "./GalleryStyle.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="container">
        <div className="content">
          <h3>Watch our gallery</h3>
          <p>There is a all photo from ours travels.</p>
          <div>
            <button>
              <Link to="/gallery">Watch now!</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
