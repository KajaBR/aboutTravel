import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

import PhotoCollage from "../components/Gallery/PhotoCollage";

const GalleryPage = () => {
  return (
    <>
      <NavBar />
      <PhotoCollage />
      <Footer />
    </>
  );
};

export default GalleryPage;
