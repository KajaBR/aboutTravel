import React from "react";
import "./App.style.css";

export const TopBar = () => {
  return (
    <div
      className="topBarTab"
      style={{
        display: "flex",
        flexDirection: "row",
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
