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
import { Presets } from "./components/Presets/Presets";
import { SubBar } from "./components/SubscribtionBar/SubBar";
import { ItalyIcon } from "./components/Blog/Italy/ItalyIcon";
import { SubPickUp } from "./components/SubscribtionBar/SubPickUp";

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
      <div className="subPickUpBar">
        <SubPickUp />
      </div>

      <div className="continents">
        <Continents />
      </div>

      <div className="title">
        <BlogSpeace />
      </div>

      <div className="blog">
        <MaltaIcon />
        <GranCanariaIcon />
        <TurkeyIcon />
        <ItalyIcon />
      </div>

      <div className="presets">
        <Presets />
      </div>

      <div className="subBar">
        <SubBar />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
