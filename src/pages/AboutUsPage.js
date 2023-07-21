import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import AboutUs from "../components/AboutUs/AboutUs";

const AboutUsPage = () => {
  return (
    <>
      {/* <Hero /> */}
      <NavBar />
      <AboutUs />
      <Newsletter />
      <Footer />
    </>
  );
};

export default AboutUsPage;
