import React from "react";
import "../App.scss";
import PageIntroduction from "./PageIntroduction";
import PrevNext from "./PrevNext";

const TestPage = () => {
  return (
    <div className="test-page">
      <PageIntroduction
        pageName="test"
        pageIntroText=" Welcome to the Sofware design products page. In this page you will
        all products that I developed in association to the software design  The
        products showcased justify learning outcome 3. Keep scrolling down and
        enjoy reading!"
        learningOutcome="Learning outcome 2: User interaction (execution & validation)"
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

export default TestPage;
