import React from "react";
import { BlogSpeace } from "../../components/BlogSpeace";
import { MaltaIcon } from "../../components/Blog/Malta/MaltaIcon";
import { GranCanariaIcon } from "../../components/Blog/GranCanaria/GranCanariaIcon";
import { TurkeyIcon } from "../../components/Blog/Turkey/TurkeyIcon";
import { ItalyIcon } from "../../components/Blog/Italy/ItalyIcon";
import { ButtonToOpenPopUp } from "../../components/SubscribtionBar/ButtonToOpenPopUp";
import { TopFoto } from "../../components/FotoBar/TopFoto";
import { Continents } from "../../components/Continent/Continents";
import { NewsBarEnd } from "../../components/SubscribtionBar/NewsBarEnd";
import { Footer } from "../../components/Footer";
import { TopBar } from "../../components/TopBar";
import { Logo } from "../../components/Logo";

export const Blog = () => {
  return (
    <article>
      <div className="topFoto">
        <TopFoto />
      </div>
      <div className="popupButtonOpen">
        <ButtonToOpenPopUp />
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
      <div className="newsBarEnd">
        <NewsBarEnd />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </article>
  );
};
