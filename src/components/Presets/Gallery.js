import React from "react";

export const Gallery = () => {
  const palms = {
    url: "img/palms.jpg",
  };
  return (
    <div className="gallery">
      <img src={palms.url} alt="palms" width={350} height={400} />
    </div>
  );
};
