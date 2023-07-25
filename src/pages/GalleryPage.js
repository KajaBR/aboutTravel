import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import PhotoCollage from "../components/Gallery/PhotoCollage";

const GalleryPage = () => {
  return (
    <>
      <NavBar />
      <PhotoCollage />
      <Newsletter />
      <Footer />
    </>
  );
};

export default GalleryPage;
