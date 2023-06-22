import React from "react";

export const TopBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: "27px",
        fontWeight: "900",
        position: "fixed",
      }}
    >
      <ul
        style={{
          paddingRight: "10px",
          paddingLeft: "10px",
        }}
      >
        Home
      </ul>
      <ul style={{ paddingRight: "20px", paddingLeft: "20px" }}>Travel blog</ul>
      <ul style={{ paddingRight: "20px", paddingLeft: "20px" }}>About us</ul>
    </div>
  );
};
