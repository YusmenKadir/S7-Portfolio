import React from "react";
import PageIntroduction from "./PageIntroduction";
import "../App.scss";
import lowfione from "../assets/lowfi-1.png";
import lowfitwo from "../assets/lowfi-2.png";
import lowfithree from "../assets/lowfi-3.png";
import lowfifour from "../assets/lowfi-4.png";
import lowfifive from "../assets/lowfi -5.png";
import hifizero from "../assets/HOME page Desktop View.png";
import hifione from "../assets/HOME page Desktop View Card Hover State 1.png";
import hifitwo from "../assets/HOME page Desktop View Card Hover State 2.png";
import hifithree from "../assets/HOME page Desktop View Card Hover State 3.png";
import hififour from "../assets/Individual Project Desktop View.png";
import hififive from "../assets/Individual Project Desktop View.png";
import hifisix from "../assets/Content.png";

const PortfolioPrototypePage = () => {
  return (
    <div className="portfolioprototype-page">
      <PageIntroduction
        pageName="portfolioresearch"
        pageIntroText=" Welcome to the prototype page of my individual project. In this page you will find 
        the low-fidelity and high fidelity prototypes that I created. 
        The products showcased justify learning outcomes 2. Keep scrolling down and
        enjoy reading!"
        learningOutcome="Learning outcome 2: User interaction (execution & validation)"
      />

      <div className="portfolioprototype-page-wrapper">
        <h1>Low-fidelity prototypes</h1>

        <div className="images">
          <img src={lowfione} alt="#" />
          <img src={lowfitwo} alt="#" />
          <img src={lowfithree} alt="#" />
          <img src={lowfifour} alt="#" />
          <img src={lowfifive} alt="#" />
        </div>

        <h1>Hi-fidelity prototypes</h1>

        <div className="images">
          <img src={hifizero} alt="#" />
          <img src={hifione} alt="#" />
          <img src={hifitwo} alt="#" />
          <img src={hifithree} alt="#" />
          <img src={hififour} alt="#" />
          <img src={hififive} alt="#" />
          <img src={hifisix} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPrototypePage;
