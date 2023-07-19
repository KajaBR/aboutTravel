import React from "react";
import "./BlogBarStyle.css";
import { GranCanariaPost } from "../Blog/GranCanaria/GranCanariaPost";
import { MaltaPost } from "../Blog/Malta/MaltaPost";
import { TurkeyPost } from "../Blog/Turkey/TurkeyPost";

const BlogBar = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="content">
          <h4>New posts</h4>
          <div className="posts">
            <GranCanariaPost />
            <MaltaPost />
            <TurkeyPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBar;
