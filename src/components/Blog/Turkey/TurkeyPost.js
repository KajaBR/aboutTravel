import React from "react";
import "../Style/style.css";

export const TurkeyPost = () => {
  return (
    <article style={{ padding: "20px" }}>
      <div
        className="post"
        style={{
          backgroundImage: "url(./img/TurkeyBackground.jpg)",
        }}
      >
        <div className="namePost">
          Turkey
          <p>what should you try there</p>
          <button>Read more</button>
        </div>
      </div>
    </article>
  );
};
