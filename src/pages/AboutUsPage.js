import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import AboutUs from "../components/AboutUs/AboutUs";

const AboutUsPage = () => {
  return (
    <>
      <NavBar />
      <AboutUs />
      <Newsletter />
      <Footer />
    </>
  );
};

export default AboutUsPage;
