import "./components/App.style.css";
import { GranCanariaIcon } from "./components/Blog/GranCanaria/GranCanariaIcon";
import { MaltaIcon } from "./components/Blog/Malta/MaltaIcon";
import { TurkeyIcon } from "./components/Blog/Turcja/TurkeyIcon";
import { BlogSpeace } from "./components/BlogSpeace";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Maps } from "./components/Maps";
import { TopBar } from "./components/TopBar";
import { TopFoto } from "./components/TopFoto";

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

      <div className="maps">
        <Maps />
      </div>

      <div className="title">
        <BlogSpeace />
      </div>
      <div className="blog">
        <MaltaIcon />
        <GranCanariaIcon />
        <TurkeyIcon />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
