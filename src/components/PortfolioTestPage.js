import React from "react";
import "../App.scss";
// import PrevNext from "./PrevNext";
import PageIntroduction from "./PageIntroduction";
import testingImg from "../assets/testingImg.png";
import pdf from "../documents/individualprojectusabilitytest.pdf";

const PortfolioTestPage = () => {
  const navigateToCmd = () => {
    window.open("https://cmdmethods.nl/cards/lab/usability-testing", "_blank");
  };

  const openPdf = () => {
    window.open(pdf);
  };
  return (
    <div className="stakeholderappreciation-page">
      <PageIntroduction
        pageName="stakeholderappreciation"
        pageIntroText=" In this section, I have conducted
        usability testing on my website to ensure that the design I 
        created effectively meets the needs and expectations of user.
        The products showcased justify learning outcome 2. Keep scrolling down and
        enjoy reading!"
        learningOutcome="Learning outcome 2: User interaction (execution & validation) "
      />

      <div className="stakeholderappreciation-page-wrapper">
        <h1>Test</h1>

        <div className="inner-wrapper">
          <div className="container-image">
            <img src={testingImg} alt="#" />
          </div>
          <div className="container-text">
            <h2>Question</h2>
            <p>
              How can I spot and fix design issues on my portfolio before
              publishing it?
            </p>
            <h2>Method</h2>
            <p
              style={{
                width: "unset",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={navigateToCmd}
            >
              Usability testing
            </p>

            <h2>Why</h2>

            <p style={{ width: "unset" }}>
              In order to detect problems users might have with my design and
              correct these before the website goes live.
            </p>

            <h2>How</h2>

            <p style={{ width: "unset" }}>
              I created a test with different tasks which users needed to fulfil
              step by step
            </p>

            <h2>Result</h2>

            <p
              style={{
                width: "unset",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={openPdf}
            >
              Usability test report
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTestPage;
