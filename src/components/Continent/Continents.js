import React from "react";
import { Europe } from "./Europe";
import { Asia } from "./Asia";
import "../Continent/style.css";

export const Continents = () => {
  return (
    <div>
      <div className="continentsTitle">
        Choose continent to explore<br></br>
      </div>
      <div className="pins">
        <Europe />
        <Asia />
      </div>
    </div>
  );
};
