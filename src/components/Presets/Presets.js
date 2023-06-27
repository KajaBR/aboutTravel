import React from "react";
import { Description } from "./Description";
import { Gallery } from "./Gallery";
import "./style.css";

export const Presets = () => {
  return (
    <div className="presetsBar">
      <Description />
      <Gallery />
    </div>
  );
};
