import React, { useState } from "react";
import { PopUpNewsletter } from "./PopUpNewsletter";

export const NewsletterPickUp = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <article
      className="newsletterPickUp"
      onClick={() => {
        setIsClicked(<PopUpNewsletter />);
      }}
    >
      {isClicked && <PopUpNewsletter />}
      <div className="newsletterPickUpText">Join to our newsletter!</div>
    </article>
  );
};
