import React, { useRef, useEffect } from "react";
import "../App.scss";
import PageIntroduction from "./PageIntroduction";
import PrevNext from "./PrevNext";
import amandaPersonasImg from "../assets/Amanda-Persona.png";
import midTermPresi from "../documents/Noise Control Mid-Term Review.pdf";
import { IoMdOpen } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";
import competirorAnalysisDoc from "../documents/Competitiveanalysis.pdf";

const DefinePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const personaRef = useRef(null);
  const presiRef = useRef(null);
  const competitorRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#persona" && personaRef.current) {
      personaRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (location.hash === "#competivie-analysis" && competitorRef.current) {
      competitorRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#mid-term-presentation" && presiRef.current) {
      presiRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const openCompetitor = () => {
    window.open(
      "https://cmdmethods.nl/cards/library/competitive-analysis",
      "_blank"
    );
  };

  const openPresi = () => {
    window.open(midTermPresi, "_blank");
  };

  const openPersona = () => {
    window.open(
      "https://cmdmethods.nl/cards/stepping-stones/persona",
      "_blank"
    );
  };

  const openCompetitorDoc = () => {
    window.open(competirorAnalysisDoc, "_blank");
  };

  const openEmpathisePage = () => {
    navigate("/group-project/empathise#doc-analysis");
  };
  return (
    <div className="define-page">
      <PageIntroduction
        pageName="define"
        pageIntroText=" Welcome to the Define phase products page. In this page you will
        find a detailed image of the activities I conducted during the
        define phase. The products showcased justify learning outcomes 2, 5 and 7. Keep scrolling down and
        enjoy reading!"
        learningOutcome="Learning outcome 2: User interaction (execution & validation)"
        learningOutcome2="Learning outcome 5: Investigative problem solving"
        learningOutcome3="Learning outcome 7: Goal-oriented interaction "
      />
      {/* <div className={`sticky-header ${isSticky ? "sticky" : ""}`}>
        <div>Jump to phase</div>
        <div className="box">
          <div className="counter">1</div>
          <div className="phase-name">Emphatise</div>
        </div>
        <div className="box">
          <div className="counter">2</div>
          <div className="phase-name">Define</div>
        </div>
        <div className="box">
          <div className="counter">3</div>
          <div className="phase-name">Ideation</div>
        </div>
        <div className="box">
          <div className="counter">4</div>
          <div className="phase-name">Prototype</div>
        </div>
        <div className="box">
          <div className="counter">5</div>
          <div className="phase-name">Test</div>
        </div>
        <div className="box">
          <div className="counter">6</div>
          <div className="phase-name">Software system design</div>
        </div>
        <div className="box">
          <div className="counter">7</div>
          <div className="phase-name">Recommendations</div>
        </div>
        <div className="box">
          <div className="counter">8</div>
          <div className="phase-name">Stakeholder appreciation</div>
        </div>
        <div className="box">
          <div className="counter">9</div>
          <div className="phase-name">Reflection</div>
        </div>
      </div> */}

      <div className="define-page-persona" ref={personaRef}>
        <h1>Persona</h1>
        <div className="wrapper">
          <div className="container-image"></div>
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              During the define phase, I contributed to our process by creating
              a persona that represents our target user group based on the
              previous research I and my colleagues did during the empathise
              phase.
            </p>

            <h2>Question</h2>
            <p>
              How can we visually represent our research findings and collected
              insights in a meaningful and impactful way?
            </p>

            <h2>Method</h2>
            <p className="method" onClick={openPersona}>
              Persona
            </p>

            <h2>Why</h2>

            <p>
              To represent the user in discussions about the design in an
              elegant way.
            </p>

            <h2>How</h2>

            <p>
              To create the persona, I analyzed{" "}
              <span onClick={openEmpathisePage}>
                documents and conducted a user interview with a primary school
                teacher.
              </span>
              Combining insights from both sources, I identified patterns and
              challenges among teachers. The persona represents the target user
              group, guiding our design process to address their specific needs
              and concerns.
            </p>

            <h2>Results</h2>

            <div className="persona-result">
              <img src={amandaPersonasImg} alt="#" />
            </div>

            <h2>Conclusion</h2>
            <p>
              In conclusion this persona helped us understand the frustrations,
              goals and preferences of our target users which subsequently
              resulted in the creation of a tailored digital solution.
            </p>
          </div>
        </div>
      </div>

      <div className="define-page-competitor" ref={competitorRef}>
        <h1>Competitive Analysis</h1>
        <div className="wrapper">
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              During the define phase each member conducted his own competitive
              analysis in order to gain a better understanding of the existing
              market landscape and how other apps were addressing a similar
              design problem. Some of us did it for smartwatch apps whereas
              others did for mobile apps. At the end our research & analysis was
              combined together.
            </p>

            <h2>Question</h2>
            <p>How can valuable insights be presented to the end users?</p>

            <h2>Method</h2>
            <p className="method" onClick={openCompetitor}>
              Competitive analysis
            </p>

            <h2>Why</h2>

            <p>
              By conducting this competitive analysis I aimed to gain a better
              understanding of how other apps in this domain showcase certain
              features and functionalities. This process allowed me to gather
              inspiration and insights from the existing solutions which I
              examined and also enabled me to identify some effective design
              patterns. The competitive analysis equipped me with valuable
              knowledge which could inform and guide the design of our product
              resulting in having a product with unique user experience.{" "}
            </p>

            <h2>How</h2>

            <p>
              I conducted competitive analysis by researching a couple of mobile
              apps from different web stores: Apple app store, Google Play and
              Huawei store. Some of them I downloaded on my own phone and
              browsed through them. I wanted to know what kind of features and
              functionalities they offer and most importantly how they present
              information to end users including their layout, navigation and
              overall user interface.
            </p>

            <h2>Results</h2>

            <div className="docs-wrapper" onClick={openCompetitorDoc}>
              <div className="doc">
                <div className="text">Competitive analysis</div>
                <div className="icon">
                  <IoMdOpen size={25} />{" "}
                </div>
              </div>
            </div>

            <h2>Conclusion</h2>
            <p>
              From the analysis I conducted, I concluded that all the apps I
              found displayed the data to the user using the same principle.
              They all had a progress indicator showcasing the db levels and a
              chart below it. All apps also displayed the min , max and average
              db levels captured.
            </p>

            <h2>Recommendation</h2>
            <p>
              The Sound Meter app from the Huawei store was definitely an
              inspiration mainly because of the nice colour schemes provided
              from the app. That could be taken into account when designing our
              app. The Clear Wave app also may be an inspiration because of nice
              combination of blue & white colours.
            </p>
          </div>
        </div>
      </div>

      <div className="define-page-presentation" ref={presiRef}>
        <h1>Mid-Term presentation</h1>
        <div className="wrapper">
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              In the middle of the semester we had a Mid-Term presentation where
              everyone within the noise control project presented their
              progress. Together with Tanmay we presented our progress to the
              others.
            </p>

            <h2>Question</h2>
            <p>
              How can we showcase our work to other teams within the project?
            </p>

            <h2>Method</h2>
            <p className="method">Presentation</p>

            <h2>Why</h2>

            <p>
              This presentation was an opportunity for us to share and
              communicate our progress to other teams within the project in
              order to gain valuable perspectives from them and enhance our
              process.
            </p>

            <h2>How</h2>

            <p>
              I worked with Tanmay and Wolf to create our presentation. Wolf and
              Tanmay were responsible for the design and I was responsible for
              structuring the informational content within the presentation.
            </p>

            <h2>Results</h2>

            <div className="docs-wrapper" onClick={openPresi}>
              <div className="doc">
                <div className="text">Mid-Term presentation</div>
                <div className="icon">
                  <IoMdOpen size={25} />{" "}
                </div>
              </div>
            </div>

            <h2>Conclusion </h2>
            <p>
              I presented the presentation with Tanmay to other teachers and
              teams within the project. They were impressed with our progress
              and we received positive feedback which was an indication that we
              are doing a great job!
            </p>
          </div>
        </div>
      </div>

      <PrevNext
        nextLink="/group-project/ideate"
        previousLink="/group-project/empathise"
        previousText="Empathise phase"
        nextText="Ideate phase"
      />
    </div>
  );
};

export default DefinePage;
