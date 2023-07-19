import "./components/App.style.css";
import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import BlogBar from "./components/BlogBar/BlogBar";
import Gallery from "./components/Gallery/Gallery";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <BlogBar />
      <Gallery />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
