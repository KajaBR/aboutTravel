import "./components/App.style.css";
import { GranCanariaIcon } from "./components/Blog/GranCanaria/GranCanariaIcon";
import { MaltaIcon } from "./components/Blog/Malta/MaltaIcon";
import { TurkeyIcon } from "./components/Blog/Turkey/TurkeyIcon";
import { BlogSpeace } from "./components/BlogSpeace";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Continents } from "./components/Continent/Continents";
import { TopBar } from "./components/TopBar";
import { TopFoto } from "../src/components/FotoBar/TopFoto";
import { NewsBarEnd } from "./components/SubscribtionBar/NewsBarEnd";
import { ItalyIcon } from "./components/Blog/Italy/ItalyIcon";
import { ButtonToOpenPopUp } from "./components/SubscribtionBar/ButtonToOpenPopUp";
import { GalleryBar } from "./components/Gallery/GalleryBar";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Gallery } from "./pages/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <div className="mainMenu">
        <div className="logo">
          <Logo />
        </div>

        <div className="topBar">
          <TopBar />
        </div>
      </div>

      <div className="topFoto">
        <TopFoto />
      </div>
      <div className="popupButtonOpen">
        <ButtonToOpenPopUp />
      </div>

      <div className="continents">
        <Continents />
      </div>

      <div className="blog">
        <MaltaIcon />
        <GranCanariaIcon />
        <TurkeyIcon />
        <ItalyIcon />
      </div>

      <div className="galleryBarMain">
        <GalleryBar />
      </div>

      <div className="newsBarEnd">
        <NewsBarEnd />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
