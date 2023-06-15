import React, { useState } from "react";
import "../App.scss";
import PageIntroduction from "./PageIntroduction";
import PrevNext from "./PrevNext";
import amandaPersonasImg from "../assets/Amanda-Persona.png";
import phaseConclusionImage from "../assets/phaseConclusion.png";
import cmdPersonaImg from "../assets/cmdPersona.png";

const DefinePage = () => {
  const [isSticky] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const processSection = document.querySelector(".project-process");
  //     const reflectionSection = document.querySelector(".project-reflection");

  //     if (
  //       window.scrollY >= processSection.offsetTop &&
  //       window.scrollY < reflectionSection.offsetTop
  //     ) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className="define-page">
      <PageIntroduction
        pageName="define"
        pageIntroText=" Welcome to the Define phase insights page. In this page you will
        find a detailed image of the activities I conducted during the
        define phase and the key findings that influenced our project. The
        products showcased justify learning outcome 1. Keep scrolling down and
        enjoy reading!"
        learningOutcome="Learning outcome 1: User interaction (analysis & advice)"
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
      {/* <div className="define-page-problemanalysis">
        <h1>Problem analysis</h1>
        <div className="wrapper">
          <div className="container-image">
            <img
              src={literatureStudyImg}
              alt="#"
              className="design-thinking-img"
            />
          </div>
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <h2>Question</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="method-date-keywords-wrapper">
              <h2>Results</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <h2>Conclusion</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <h2>Research sources</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <h2>Next steps</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="define-page-persona">
        <h1>Persona</h1>
        <div className="wrapper">
          <div className="container-image">
            {/* <img
              src={reviewedDocsImage}
              alt="#"
              className="design-thinking-img"
            /> */}
          </div>
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <h2>Question</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="method-wrapper">
              {/* <div> */}
              <h2>Method</h2>
              <img src={cmdPersonaImg} alt="#" />
              {/* </div> */}
            </div>

            <h2>Results</h2>

            <div className="persona-result">
              <img src={amandaPersonasImg} alt="#" />
            </div>

            <h2>Conclusion</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <h2>Next steps</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="define-page-journey">
        <h1>User Interview</h1>
        <div className="wrapper">
          <div className="container-image">
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/WdRjWu4D7c8"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></iframe>
          </div>
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <h2>Question</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="method-date-keywords-wrapper">
              <div>
                <h2>Method</h2>
                <img src={cdmInterviewImg} alt="#" />
              </div>
            </div>

            <h2>Results</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <h2>Key takeaways</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h2>Conclusion</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <h2>Related documents</h2>

            <div className="docs-wrapper">
              <div className="doc">
                <div className="text">User Interview</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
            </div>

            <h2>Next steps</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="define-page-competitor">
        <h1>Survey</h1>
        <div className="wrapper">
          <div className="container-image">
            <img
              src={customerSurveyImg}
              alt="#"
              className="design-thinking-img"
            />
          </div>
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <h2>Question</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="method-date-keywords-wrapper">
              <div>
                <h2>Method</h2>
                <img src={cmdSurveyImg} alt="#" />
              </div>
            </div>

            <h2>Results</h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <h2>Conclusion</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <h2>Survey link</h2>

            <div className="docs-wrapper">
              <div className="doc">
                <div className="text">View survey</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
            </div>

            <h2>Next steps</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div> */}
      {/* 
      <div className="define-page-conclusion">
        <h1>Define phase conclusion</h1>
        <div className="wrapper">
          <div className="container-image">
            <img
              src={phaseConclusionImage}
              alt="#"
              className="design-thinking-img"
            />
          </div>
          <div className="container-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div> */}
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
