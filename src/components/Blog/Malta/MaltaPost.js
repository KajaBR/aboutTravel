import React from "react";

export const MaltaPost = () => {
  return (
    <article style={{ padding: "20px" }}>
      <div
        className="post"
        style={{
          backgroundImage: "url(./img/MaltaBackground.avif)",
        }}
      >
        <div className="namePost">
          Malta
          <p>the best moment to travel there</p>
          <button>Read more</button>
        </div>
      </div>
    </article>
  );
};
