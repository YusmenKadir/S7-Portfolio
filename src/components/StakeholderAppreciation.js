import React from "react";
import PageIntroduction from "./PageIntroduction";
import PrevNext from "./PrevNext";
import "../App.scss";
import appreciationImg from "../assets/appreciationImg.png";

const StakeholderAppreciationPage = () => {
  return (
    <div className="stakeholderappreciation-page">
      <PageIntroduction
        pageName="stakeholderappreciation"
        pageIntroText=" Welcome to the Stakeholder appreciation page.
        Since I was the point of contact person representing our group to our 
        stakeholder and to the other groups within the project, his opinion was of utmost 
        importance to me. Therefore I asked for his sincere opinion in writing and received it. 
        Scroll down to read it."
        learningOutcome="Learning outcome 7: Goal-oriented interaction"
        outcomeExplanation="You communicate with different stakeholders and team members about the ICT assignment, taking into account an international context."
      />

      <div className="stakeholderappreciation-page-wrapper">
        <h1>Stakeholder appreciation</h1>

        <div className="inner-wrapper">
          <div className="container-image">
            <img src={appreciationImg} alt="#" />
          </div>
          <div className="container-text">
            <p>
              "Yusmen has been the person mostly involved within the process of
              the project. He was the one who represented his group in our
              weekly meetings and was always very active within those meetings".
            </p>
            <p>
              "He is well spoken when asked about the groups progress and can
              communicates that well with the stakeholders. He and his group
              makes sure to include everyone within their design process, and
              always asks for feedback when needed".
            </p>
            <p>
              "He is open for feedback and goes the extra mile when something has
              been asked from him even though it might not fit the learning
              outcomes directly but does benefit the project as a whole".
            </p>
            <p>"Yusmen has been nice to work and communicate with".</p>

            <p>
              <i>~Dennis Kirsch~</i>
            </p>
          </div>
        </div>
      </div>

      <PrevNext
        nextLink="/group-project/peer-review"
        previousLink="/group-project/software-system"
        previousText="Software system design"
        nextText="Peer review"
      />
    </div>
  );
};

export default StakeholderAppreciationPage;
