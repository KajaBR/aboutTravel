import React from "react";
import "./App.style.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Blog } from "../pages/Blog/Blog";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { Gallery } from "../pages/Gallery/Gallery";

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
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <ul
        style={{
          paddingRight: "10px",
          paddingLeft: "10px",
        }}
      >
        {/* <a href="/home">Home</a> */}
      </ul>
      <ul style={{ paddingRight: "20px", paddingLeft: "20px" }}>
        <Link to="/blog">Travel Blog</Link>
      </ul>
      <ul style={{ paddingRight: "20px", paddingLeft: "20px" }}>
        {/* <a href="/aboutus">About us</a> */}
      </ul>
    </div>
  );
};
