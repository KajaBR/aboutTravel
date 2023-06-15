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
      }}
    >
      <ul
        style={{
          paddingRight: "10px",
          paddingLeft: "10px",
        }}
      >
        Strona główna
      </ul>
      <ul style={{ paddingRight: "20px", paddingLeft: "20px" }}>Sklep</ul>
      <ul style={{ paddingRight: "20px", paddingLeft: "20px" }}>
        Relacje z podróży
      </ul>
      <ul style={{ paddingRight: "20px", paddingLeft: "20px" }}>O nas</ul>
    </div>
  );
};
