import React from "react";
import PageIntroduction from "./PageIntroduction";
import PrevNext from "./PrevNext";
import "../App.scss";
import peerReviewImg from "../assets/PeerReviewImg.png";
import peerReviewDoc from "../documents/Peer_review.pdf";

const PeerReviewPage = () => {
  const navigateToSurveyCmd = () => {
    window.open("https://cmdmethods.nl/cards/field/survey", "_blank");
  };

  const openGoogleForms = () => {
    window.open("https://forms.gle/iyaZy3T26W5sffwz6", "_blank");
  };

  const openPeerReviewDoc = () => {
    window.open(peerReviewDoc, "_blank");
  };
  return (
    <div className="peerreview-page">
      <PageIntroduction
        pageName="peerreview"
        pageIntroText=" Welcome to the Peer review page. In this page you will
        find gathered feedback from my peers regarding my participation and contribution to the project. The
        peer review showcased justify learning outcome 7. Keep scrolling down and
        enjoy reading!"
        learningOutcome="Learning outcome 7: Goal-oriented interaction"
        outcomeExplanation="You communicate with different stakeholders and team members about the ICT assignment, taking into account an international context."
      />

      <div className="peerreview-page-content">
        <h1>Peer review</h1>
        <div className="wrapper">
          <div className="container-image">
            <img src={peerReviewImg} alt="#" />
          </div>
          <div className="container-text">
            <p className="heading">Introduction</p>
            <p>
              In order to get a picture about my performance and contribution as
              a group member , I created an anonymous survey which I handed to
              my group members to fill out in a honest and transparent way. I
              used the results from the survey to structure my key takeaways
              about the work I did this semester.
            </p>

            <p className="heading">Question</p>

            <p>
              How can I gain insights into how my peers evaluated my work and
              performance this semester?
            </p>

            <p className="heading">
              Method: <span onClick={navigateToSurveyCmd}> Survey</span>
            </p>

            <p className="heading">How?</p>

            <p>
              I created a questionnaire in{" "}
              <span onClick={openGoogleForms}>Google forms</span> and handed it
              to my colleagues.
            </p>

            <p className="heading">Results</p>

            <div className="images">
              <button onClick={openPeerReviewDoc}>View Results</button>
            </div>

            <p className="heading">My takeaways</p>
            <p>
              From the conducted survey I can conclude that my peers really
              appreciated the efforts I have put into the project. Something
              that I have to truly reflect on is the fact that 2 of them stated
              that I did not actively listen to others ideas and perspectives
              and that also I need to slow down the pace in certain moments
              which I find as an aspects that I need to further improve on. As
              for my strengths they valued my work ethic and communication
              skills as well as my overall commitment and dedication to the
              project.
            </p>
          </div>
        </div>
      </div>

      <PrevNext
        nextLink="/group-project/reflection"
        previousLink="/group-project/stakeholder-appreciation"
        previousText="Stakeholder Appreciation"
        nextText="Reflection"
      />
    </div>
  );
};

export default PeerReviewPage;
