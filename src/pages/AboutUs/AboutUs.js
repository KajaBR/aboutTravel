import React from "react";
import { NewsBarEnd } from "../../components/SubscribtionBar/NewsBarEnd";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { TopBar } from "../../components/TopBar";
import { TopFoto } from "../../components/FotoBar/TopFoto";
import { ButtonToOpenPopUp } from "../../components/SubscribtionBar/ButtonToOpenPopUp";

export const AboutUs = () => {
  console.log("clik");
  return (
    <article className="mainMenu">
      <div className="logo">
        <Logo />
      </div>

      <div className="topBar">
        <TopBar />
      </div>

      <div className="topFoto">
        <TopFoto />
      </div>
      <div className="popupButtonOpen">
        <ButtonToOpenPopUp />
      </div>

      <div className="newsBarEnd">
        <NewsBarEnd />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </article>
  );
};
