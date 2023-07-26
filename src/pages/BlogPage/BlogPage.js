import React from "react";
import "./BlogPage.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import MaltaPostIcon from "../../components/Blog/Malta/MaltaPostIcon";
import GranCanariaPost from "../../components/Blog/GranCanaria/GranCanariaPostIcon";
import TurkeyPostIcon from "../../components/Blog/Turkey/TurkeyPostIcon";
import ItalyPostIcon from "../../components/Blog/Italy/ItalyPostIcon";

const BlogPage = () => {
  return (
    <>
      <NavBar />
      <div className="content-blog-page">
        <TurkeyPostIcon />
        <MaltaPostIcon />
        <GranCanariaPost />
        <ItalyPostIcon />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
