import React, { useRef, useEffect } from "react";
import "../App.scss";
import PageIntroduction from "./PageIntroduction";
import { useLocation } from "react-router";
import testingWelcomeImg from "../assets/testingScreen.png";
import resultsUsabilityTestImg from "../assets/results-usability-test.png";
import recommendationsUsabilityTestImg from "../assets/recommendations-usability-test.png";
import trackedClicksImg from "../assets/trackedClicks.png";
import usabilityTestReport from "../documents/Group-project-usability-test-report.pdf";
import usabilityTestPlan from "../documents/Usability-Testing-Plan.pdf";
import { IoMdOpen } from "react-icons/io";

import PrevNext from "./PrevNext";
const TestPage = () => {
  const location = useLocation();
  const testingRef = useRef(null);

  const analysisRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#usability-testing" && testingRef.current) {
      testingRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (location.hash === "#testing-analysis" && analysisRef.current) {
      analysisRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const openUsability = () => {
    window.open("https://cmdmethods.nl/cards/lab/usability-testing", "_blank");
  };

  const openTestPlan = () => {
    window.open(usabilityTestPlan, "_blank");
  };

  const openTestReport = () => {
    window.open(usabilityTestReport, "_blank");
  };

  return (
    <div className="test-page">
      <PageIntroduction
        pageName="test"
        pageIntroText=" Welcome to the Test phase products page. In this page you will
         all  products created during this phase. The
        products showcased justify learning outcome 2. Keep scrolling down and
        enjoy reading!"
        learningOutcome2="Learning outcome 2: User interaction (execution & validation)"
      />

      <div className="test-page-testing" ref={testingRef}>
        <h1>Usability Testing</h1>

        <div className="wrapper">
          <div className="container-image">
            <img src={testingWelcomeImg} alt="#" />
          </div>
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              After we were finished with prototyping the next crucial step for
              us was to conduct usability testing in order to get valuable
              insights into the usability and effectiveness of our app design.
            </p>
            <h2>Question</h2>
            <p>
              {" "}
              What medium is best to present the visual solutions for the end
              users?
            </p>
            <h2>Method</h2>
            <p onClick={openUsability} className="method">
              Usability Testing
            </p>
            <h2>Why</h2>

            <p>
              This method was an important part of our process. It allowed us to
              gather user feedback, identify issues and make necessary
              improvements to ensure we have an intuitive and engaging user
              interface design.
            </p>

            <h2>How</h2>

            <p>
              We used Useberry as a testing tool. My colleague Tanmay created a
              usability testing document where each one of us had to input his
              own questions to gather feedback on the screens he worked on. From
              that document we transferred the tasks and questions to Useberry
              platform. After the first deployment of the test I noticed crucial
              issues which I reported to my colleagues. Together with Tanmay and
              Wolfgang we worked until late hours to ensure their fix.
            </p>
            <h2>Results</h2>
            <p>
              The results can be seen on the side. To test the Settings section
              of our app I created 4 tasks which users needed to complete. Upon
              completion of those tasks, the user needed to answer 5 more
              additional questions for providing his feedback of the settings
              screen flow and its organisation.
            </p>

            <h2>Conclusion</h2>
            <p>
              With the test ready to be shipped we invited participants to take
              part in the test. The end goal was gathering as much as feedback
              possible so that we can make V2 of the prototype or use the
              feedback as future recommendations. The next step after the
              usability test was to analyse the test results.
            </p>

            <h2>Related documents</h2>
            <div className="docs-wrapper" onClick={openTestPlan}>
              <div className="doc">
                <div className="text">Usability Test Plan</div>
                <div className="icon">
                  <IoMdOpen size={25} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="test-page-analysis" ref={analysisRef}>
        <h1>Usability Testing Analysis</h1>

        <div className="wrapper">
          <div className="container-image">
            <img src={trackedClicksImg} alt="#" />
          </div>
          <div className="container-text">
            <h2>Introduction</h2>
            <p>
              After we send out the test and we got some results it was time to
              dive into the test results, analyse them and extract important
              insights.
            </p>
            <h2>Question</h2>
            <p>
              What medium is best to present the visual solutions for the end
              users?
            </p>
            <h2>Method</h2>
            <p className="method" onClick={openUsability}>
              Usability Testing
            </p>
            <h2>Why</h2>
            <p>In order to detect problems users may have with our design.</p>

            <h2>How</h2>

            <p>
              The Useberry tool automatically generates screen recordings, heat
              maps, user clicks, & user flows of a participant who completes the
              test. I looked into the results concerning the screens I designed
              and I made a usability test report which can be seen below.
            </p>
            <h2>Results</h2>
            <img src={resultsUsabilityTestImg} alt="#" />

            <h2>Conclusion</h2>
            <p>
              <img src={recommendationsUsabilityTestImg} alt="#" />
            </p>

            <h2>Related documents</h2>
            <div className="docs-wrapper" onClick={openTestReport}>
              <div className="doc">
                <div className="text">Usability Test Report</div>
                <div className="icon">
                  <IoMdOpen size={25} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PrevNext
        nextLink="/group-project/software-system"
        previousLink="/group-project/prototype"
        previousText="Prototype phase"
        nextText="Software system design"
      />
    </div>
  );
};

export default TestPage;
