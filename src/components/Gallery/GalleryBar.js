import React from "react";
import { Description } from "./Description";
import { Gallery } from "./Gallery";
import "./style.css";

export const GalleryBar = () => {
  return (
    <div className="galleryBar">
      <Description />
      <Gallery />
    </div>
  );
};
