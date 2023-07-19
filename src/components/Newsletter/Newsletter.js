import React from "react";
import "./NewsletterStyle.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="content">
          <h3>Join to our newsletter</h3>
          <div>
            <input placeholder="Your Name*"></input>
            <input placeholder="Your Email*"></input>
          </div>
          <div>
            <button>Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
