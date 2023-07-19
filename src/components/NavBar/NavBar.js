import React, { useState } from "react";
import "./NavBarStyle.css";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <MdOutlineModeOfTravel className="icon" />
          <h1>About Travel</h1>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>Home</li>
          <li>Blog</li>
          <li>Gallery</li>
          <li>About us</li>
        </ul>

        <div
          className={nav ? "hamburger active" : "hamburger"}
          onClick={handleNav}
        >
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
};
