import React, { useState } from "react";

export const PopUpNewsletter = () => {
  const [isVisable, setIsVisable] = useState(true);
  return (
    <div className="popUpNewsletterBar">
      <button
        className="close"
        onClick={() => {
          setIsVisable(false);
        }}
      >
        {isVisable && <PopUpNewsletter />}X
      </button>
      <form className="formNewsletter">
        <p className="popUpJoinText">Join our newsletter</p>
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
