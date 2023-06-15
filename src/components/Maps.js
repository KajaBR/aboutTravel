import React from "react";

export const Maps = () => {
  const asia = {
    url: "./img/Asia.jpg",
  };

  const europe = {
    url: "./img/Europe.jpg",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "space-between",
      }}
    >
      <p>
        <img
          src={europe.url}
          alt="Europa"
          width="275px"
          style={{ padding: "40px" }}
        />
      </p>
      <p>
        <img
          src={asia.url}
          alt="Asia"
          width="280px"
          style={{ padding: "40px" }}
        />
      </p>
    </div>
  );
};
