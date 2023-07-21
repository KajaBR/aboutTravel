import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Newsletter from "../components/Newsletter/Newsletter";

const GalleryPage = () => {
  return (
    <>
      {/* <Hero /> */}
      <NavBar />
      <Gallery />
      <Newsletter />
      <Footer />
    </>
  );
};

export default GalleryPage;
