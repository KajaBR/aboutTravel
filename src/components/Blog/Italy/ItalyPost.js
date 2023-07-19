import React from "react";

export const ItalyPost = () => {
  return (
    <article style={{ padding: "20px" }}>
      <div
        className="post"
        style={{
          backgroundImage: "url(./img/ItalyBackground.avif)",
        }}
      >
        <div className="namePost">
          Italy
          <p>why you must travel there</p>
          <button>Read more</button>
        </div>
      </div>
    </article>
  );
};
