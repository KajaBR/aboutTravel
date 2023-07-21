import "./components/App.style.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import BlogBar from "./components/BlogBar/BlogBar";
import Gallery from "./components/Gallery/Gallery";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <BlogBar />
      <Gallery />
      <Newsletter />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
