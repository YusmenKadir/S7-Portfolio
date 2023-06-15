import React from "react";
import PageIntroduction from "./PageIntroduction";
import PrevNext from "./PrevNext";
import "../App.scss";

const RecommendationsPage = () => {
  return (
    <div className="recommendations-page">
      <PageIntroduction
        pageName="recommendations"
        pageIntroText=" Welcome to the Project Recommendation page. In this page you will
        all products that I developed in association to the software design  The
        products showcased justify learning outcome 3. Keep scrolling down and
        enjoy reading!"
        learningOutcome="Learning outcome 7: Goal-oriented interaction"
      />

      <PrevNext
        nextLink="/group-project/recommendations"
        previousLink="/group-project/test"
        previousText="Test phase"
        nextText="Project Recommendations"
      />
    </div>
  );
};

export default RecommendationsPage;
