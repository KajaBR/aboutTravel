import React from "react";
import "../SubscribtionBar/style.css";

export const NewsBarEnd = () => {
  return (
    <div className="newsBarEnd">
      <form action="">
        <p className="joinText">Join our newsletter</p>
        <br></br>
        <p>
          <input className="input" placeholder="Name*" />
        </p>
        <p style={{ paddingTop: "5px", paddingBottom: "10px" }}>
          <input className="input" placeholder="Email*" />
        </p>
        <p className="button">
          <button className="submitButton">Submit</button>
        </p>
      </form>
    </div>
  );
};
