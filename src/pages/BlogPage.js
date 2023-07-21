import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { MaltaPost } from "../components/Blog/Malta/MaltaPost";
import { TurkeyPost } from "../components/Blog/Turkey/TurkeyPost";
import GranCanariaPost from "../components/Blog/GranCanaria/GranCanariaPost";
import { ItalyPost } from "../components/Blog/Italy/ItalyPost";

const BlogPage = () => {
  return (
    <>
      <NavBar />
      <div
        className="content"
        style={{
          height: "600px",
          display: "flex",
          justifyContent: "center",
          padding: "5rem 0",
        }}
      >
        <TurkeyPost />
        <MaltaPost />
        <GranCanariaPost />
        <ItalyPost />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
