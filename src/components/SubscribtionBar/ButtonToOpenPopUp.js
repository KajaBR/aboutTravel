import React, { useState } from "react";

import "../SubscribtionBar/style.css";
import PopUp from "./PopUp";

export const ButtonToOpenPopUp = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <button className="openPopupBtn" onClick={() => setButtonPopup(true)}>
        Join to our newsletter!
      </button>

      <div>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
          <form className="popupForm" action="">
            <p>
              <input className="input" placeholder="Name*" />
            </p>
            <p style={{ paddingTop: "5px", paddingBottom: "10px" }}>
              <input className="input" placeholder="Email*" />
            </p>
            <button className="submitButton">Submit</button>
          </form>
        </PopUp>
      </div>
    </div>
  );
};
