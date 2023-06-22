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
          justifyContent: "flex-end",
          paddingRight: "100px",
          paddingTop: "50px",
        }}
      >
        <p style={{ padding: "10px" }}>
          <img src={instagram.url} alt="ig" width={"35px"} />
        </p>
        <p style={{ padding: "10px" }}>
          <img src={facebook.url} alt="" width={"35px"} />
        </p>
      </p>

      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          color: "gray",
        }}
      >
        aboutTravel Copyright © 2023
      </p>
    </article>
  );
};
