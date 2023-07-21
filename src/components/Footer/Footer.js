import React from "react";
import "./Footer.css";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <MdOutlineModeOfTravel className="icon" />
            <h1>About Travel</h1>
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <p>
              <Link path="/">Home</Link>
            </p>
            <p>
              <Link to="/blog">Blog</Link>
            </p>
            <p>
              <Link to="/gallery">Gallery</Link>
            </p>
            <p>
              <Link to="/aboutus">About us</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </div>
          <form>
            <h3>Join to our newsletter</h3>
            <input placeholder="Your Name*"></input>
            <input placeholder="Your Email*"></input>
            <button>Join Now</button>
            <FaInstagram className="social-icon" />
            <FaFacebook className="social-icon" />
            <FaTiktok className="social-icon" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
