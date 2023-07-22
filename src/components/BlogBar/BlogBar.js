import React from "react";
import "./BlogBarStyle.css";
import GranCanariaPost from "../Blog/GranCanaria/GranCanariaPostIcon";
import MaltaPostIcon from "../Blog/Malta/MaltaPostIcon";
import TurkeyPostIcon from "../Blog/Turkey/TurkeyPostIcon";

const BlogBar = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="content">
          <h4>New posts</h4>
          <div className="posts">
            <GranCanariaPost />
            <MaltaPostIcon />
            <TurkeyPostIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBar;
