import React from "react";
import "../Continent/style.css";

export const Asia = () => {
  const asia = {
    url: "./img/pinAT.png",
  };
  return (
    <div className="pin">
      <p>
        <img src={asia.url} alt="Asia" width="70px" />
        <p className="continentName">Asia</p>
      </p>
    </div>
  );
};
