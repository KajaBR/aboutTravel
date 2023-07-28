import React from "react";
import "./ContactStyle.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <div className="form-container">
            {/* fill it */}
            <form action="https://formsubmit.io/send/ your email" method="POST">
              <input
                name="_formsubmit_id"
                type="text"
                style={{ display: "none" }}
              />
              <h3>Contact Us</h3>
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

              <input
                name="_redirect"
                type="hidden"
                id="name"
                // do wpisania strona z podziękowaniami
                value="https://your website url"
              ></input>

              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
