import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Blog from "./pages/BlogPage/BlogPage";
import Gallery from "./pages/GalleryPage";
import Aboutus from "./pages/AboutUsPage";
import Contact from "./pages/ContactPage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GranCanariaBlogPage from "./pages/BlogPage/GranCanariaBlogPage";
import MaltaBlogPage from "./pages/BlogPage/MaltaBlogPage";
import ItalyBlogPage from "./pages/BlogPage/ItalyBlogPage";
import TurkeyBlogPage from "./pages/BlogPage/TurkeyBlogPage";
import GalleryPage from "./pages/GalleryPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/grancanaria" element={<GranCanariaBlogPage />} />
      <Route path="/blog/malta" element={<MaltaBlogPage />} />
      <Route path="/blog/italy" element={<ItalyBlogPage />} />
      <Route path="/blog/turkey" element={<TurkeyBlogPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
