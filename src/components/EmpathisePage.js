import React, { useState, useRef, useEffect } from "react";
import literatureStudyImg from "../assets/literatureStudyImg.png";
import literaturecmdImg from "../assets/cmdliterature.png";
import { BsCalendar3, BsSearch, BsKeyboard } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import PrevNext from "./PrevNext";
import PageIntroduction from "./PageIntroduction";
import phaseConclusionImage from "../assets/phaseConclusion.png";
import documentAnalysisImage from "../assets/docanalysisImg.png";
import reviewedDocsImage from "../assets/reviewedDocsImg.png";
import cdmInterviewImg from "../assets/cmdInterview.png";
import cmdSurveyImg from "../assets/cmdSurveyImg.png";
import customerSurveyImg from "../assets/customerSurveyImg.png";
import { useLocation } from "react-router";

const EmpathisePage = () => {
  const [isSticky] = useState(true);

  const location = useLocation();
  const literatureStudyRef = useRef(null);
  const docAnalysisRef = useRef(null);
  const interviewRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#literature-study" && literatureStudyRef.current) {
      literatureStudyRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (location.hash === "#user-interview" && interviewRef.current) {
      interviewRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#doc-analysis" && docAnalysisRef.current) {
      docAnalysisRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className="emphatise-page">
      <PageIntroduction
        pageName="emphatise"
        pageIntroText=" Welcome to the Empathise phase insights page. In this page you will
        find a detailed image of the activities I conducted during the
        empathize phase and the key findings that influenced our project. The
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

      <div className="emphatise-page-lstudy" ref={literatureStudyRef}>
        <h1>Literature study</h1>
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
              How can the principles of human factors and ergonomics be
              integrated to create products and services that are usable, safe,
              and comfortable for a diverse range of users?
            </p>

            <div className="method-date-keywords-wrapper">
              <div>
                <h2>Method</h2>
                <img src={literaturecmdImg} alt="#" />
              </div>
              <div>
                <h2>Search date</h2>
                <BsCalendar3 size={50} />
                <span>23.03.2023</span>
              </div>
              <div>
                <h2>Search keywords</h2>
                <BsKeyboard size={50} />
                <span className="chip">Key word 1</span>
                <span className="chip">keyword 2</span>
                <span className="chip">keyword 3</span>
                {/* <span className="chip">
                  How to integrate human factors and ergonomics in digital
                  products?
                </span> */}
                {/* <span className="chip">
                  How to integrate human factors and ergonomics in digital
                  products?
                </span> */}
              </div>
              <div>
                <h2>Search engine</h2>
                <BsSearch size={50} />
                <span>Google</span>
              </div>
            </div>

            <h2>Results</h2>
            <p>
              Human factors and ergonomics principles focus on understanding how
              people interact with technology, products, and services. To
              integrate these principles into our design, we can take the
              following steps:
            </p>

            <p>
              1.We should understand user needs and characteristics: We should
              conduct research to gain an understanding of their users needs,
              abilities, limitations, and preferences. This information can be
              gathered through user interviews, surveys, and observations.
            </p>

            <p>
              2.We should incorporate user-centered design: The design process
              should be focused on the user, incorporating their feedback
              throughout the development process. This can include user testing
              and prototyping.
            </p>

            <p>
              3.We should optimize usability: We should aim to create a product
              that is easy to use and navigate, with clear instructions and
              feedback.{" "}
            </p>
            <p>
              4.We should consider comfort: Our product should be designed to be
              comfortable and ergonomic. This can involve designing a product
              that fit a range of body types and sizes and minimizing strain on
              the user's body.
            </p>

            <p>
              5.We should account for diversity: We have to consider the needs
              of diverse users, including those with disabilities, different
              cultural backgrounds, and different levels of technical expertise.
            </p>

            <h2>Conclusion</h2>
            <p>
              By integrating these principles we can create a product that is
              user-friendly, safe, and comfortable for a diverse range of users.
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
      <div className="emphatise-page-docanalysis" ref={docAnalysisRef}>
        <h1>Document Analysis</h1>
        <div className="wrapper">
          <div className="container-image">
            <img
              src={reviewedDocsImage}
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
                <img src={documentAnalysisImage} alt="#" />
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

            <h2>Research sources</h2>

            <div className="docs-wrapper">
              <div className="doc">
                <div className="text">Document 1</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
              <div className="doc">
                <div className="text">Document 2</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
              <div className="doc">
                <div className="text">Document 3</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
              <div className="doc">
                <div className="text">Document 4</div>
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
      </div>
      <div className="emphatise-page-interview" ref={interviewRef}>
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
      </div>
      <div className="emphatise-page-survey">
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
      </div>

      <div className="emphatise-page-conclusion">
        <h1>Empathise phase conclusion</h1>
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
      </div>

      <PrevNext
        nextLink="/group-project/define"
        previousLink="/group-project"
        previousText="Group Project Overview"
        nextText="Define phase"
      />
    </div>
  );
};

export default EmpathisePage;
