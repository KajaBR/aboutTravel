import React from "react";
import "../Style/style.css";

export const TurkeyIcon = () => {
  return (
    <article style={{ padding: "30px" }}>
      <div
        className="post"
        style={{
          backgroundImage: "url(./img/TurkeyBackground.avif)",
        }}
      >
        <p className="namePost">
          Turkey
          <p>what should you try there</p>
        </p>
      </div>
    </article>
  );
};
