import React from "react";
import "../Style/style.css";

export const TurkeyIcon = () => {
  return (
    <article style={{ padding: "20px" }}>
      <div
        className="post"
        style={{
          backgroundImage: "url(./img/TurkeyBackground.avif)",
        }}
      >
        <p className="namePost">Turkey</p>
      </div>
    </article>
  );
};
