import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import MaltaPost from "../../components/Blog/Malta/MaltaPost";

const MaltaBlogPage = () => {
  return (
    <>
      <NavBar />
      <MaltaPost />
      <Footer />
    </>
  );
};

export default MaltaBlogPage;
