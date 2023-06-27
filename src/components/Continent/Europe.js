import React from "react";
import "../Continent/style.css";

export const Europe = () => {
  const europe = {
    url: "./img/pinAT.png",
  };
  return (
    <div>
      <p className="pin">
        <img src={europe.url} alt="Europa" width="70px" />
        <p className="continentName" id="europe">
          Europe
        </p>
      </p>
    </div>
  );
};
