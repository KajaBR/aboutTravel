import React from "react";

export const Footer = () => {
  const instagram = {
    url: "./img/ig.png",
  };

  const facebook = {
    url: "./img/fb.png",
  };

  const logo = {
    url: "./img/aTLogo.jpg",
  };
  return (
    <article>
      <p
        style={{
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignContent: "flex-end",
          paddingTop: "8px",
        }}
      >
        <p style={{ padding: "5px" }}>
          <img src={instagram.url} alt="ig" width={"20px"} />
        </p>
        <p style={{ padding: "5px" }}>
          <img src={facebook.url} alt="" width={"20px"} />
        </p>
      </p>

      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
        }}
      >
        aboutTravel Copyright © 2023
      </p>
    </article>
  );
};
