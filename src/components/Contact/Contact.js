import React from "react";
import "./ContactStyle.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <div className="form-container">
            <form>
              <h2>Contact Us</h2>
              <div>
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div>
                <label>Email</label>
                <input type="text" placeholder="Enter your email" />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  type="text"
                  rows="10"
                  placeholder="Enter your message"
                />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
