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
import documentOne from "../documents/Grip Samevatting Focusgroepen.pdf";
import documentTwo from "../documents/Grip Student Ervaring Gehoorbescherming.pdf";
import documentThree from "../documents/Grip Student Klachten.pdf";
import documentFour from "../documents/Grip Student Overige Klachten.pdf";
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

  const openFirstDoc = () => {
    window.open(documentOne, "_blank");
  };

  const openSecondDoc = () => {
    window.open(documentTwo, "_blank");
  };

  const openThirdDoc = () => {
    window.open(documentThree, "_blank");
  };

  const openFourthDoc = () => {
    window.open(documentFour, "_blank");
  };
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
              I started this phase by conducting literature study in order to
              answer this hard question. I was determined to provide the best
              answer possible despite the challenges I encountered in finding
              good research sources on this topic.
            </p>

            <h2>Question</h2>
            <p>
              How can the principles of human factors and ergonomics be
              integrated to create products and services that are usable, safe,
              and comfortable for a diverse range of users?
            </p>

            <h2>Why</h2>
            <p>
              The literature study I conducted was important because it taught
              me about the important steps we needed to take to create a good
              product at the end of our journey. Armed with this knowledge, I
              tried to highlight the important points to my colleagues so that
              we would be on the same page during our process.
            </p>

            <h2>How</h2>

            <p>
              I used google search engine by typing search keywords. I found a
              couple of informational sources. I pieced together all information
              from the resources to formulate my answer.
            </p>

            <div className="method-date-keywords-wrapper">
              <div>
                <h2>Method</h2>
                <img src={literaturecmdImg} alt="#" />
              </div>
              {/* <div>
                <h2>Search date</h2>
                <BsCalendar3 size={50} />
                <span>23.03.2023</span>
              </div> */}
              <div>
                <h2>Search keywords</h2>
                <BsKeyboard size={50} />
                <span className="chip">
                  human factors and ergonomics in digital product design
                </span>
                <span className="chip">
                  What are human factors and ergonomics
                </span>
                <span className="chip">
                  how to integrate human factors and ergonomics in smart watch
                  design
                </span>
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
              First we should aim to understand the needs and characteristics of
              the users. We should conduct research to understand their needs
              and preferences.
            </p>

            <p>
              Secondly we should incorporate user-centered design. Our design
              process should be focused on the user and we should incorporate
              their feedback throughout our process.
            </p>

            <p>
              Thirdly we should optimise usability of the product. We should
              create a product which is easy to use and navigate having clear
              instructions and feedback.
            </p>
            <p>
              Finally we should account for diversity. We should consider the
              needs of diverse users. Some users of our product might have
              disabilities , different cultural backgrounds and different level
              of technical expertise.
            </p>

            <p></p>

            <h2>Conclusion</h2>
            <p>
              By integrating these steps we can create a product that is
              user-friendly, safe, and comfortable for a diverse range of users.
            </p>

            <h2>Research sources</h2>
            <p>
              Wikipedia (n.d.). Human factors and ergonomics, from
              https://en.wikipedia.org/wiki/Human_factors_and_ergonomics
            </p>

            <p>
              Norman, D. A. (2013). The design of everyday things: Revised and
              expanded edition, from
              https://ia902800.us.archive.org/3/items/thedesignofeverydaythingsbydonnorman/The
              Design of Everyday Things by Don Norman.pdf
            </p>
            <p>
              Shneiderman, B., & Plaisant, C. (2010). Designing the user
              interface: Strategies for effective human-computer
              interaction,from
              http://seu1.org/files/level5/IT201/Book%20-%20Ben%20Shneiderman-Designing%20the%20User%20Interface-4th%20Edition.pdf
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
            <p>What insights are valuable to teachers?</p>

            <div className="method-date-keywords-wrapper">
              <div>
                <h2>Method</h2>
                <img src={documentAnalysisImage} alt="#" />
              </div>
            </div>

            <h2>Why</h2>

            <p>
              The purpose of this document analysis was to examine the four
              documents provided by our stakeholder Dennis Kirsch containing the
              results of focus group discussions. The focus groups were
              conducted with the aim of gathering valuable insights and opinions
              from participants on the subject of the experiences and
              perceptions of physical education teachers regarding noise
              exposure and hearing protection in gymnasiums. Through this
              document analysis, I aimed to identify the central themes and
              significant findings from the focus group discussions in order to
              answer one of our research questions.
            </p>

            <h2>How</h2>

            <p>ashdjahkdjhk</p>

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
              In conclusion, based on the insights extracted from the documents
              I concluded that most teachers are not aware of the negative
              effects high sound levels can have on their overall health
              therefore our digital solution should aim to provide awareness to
              PE teachers about those negative effects and help them monitor and
              manage high sound levels during classes by taking necessary
              preventative actions.
            </p>

            <h2>Research sources</h2>

            <div className="docs-wrapper">
              <div className="doc" onClick={openFirstDoc}>
                <div className="text">Document 1</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
              <div className="doc" onClick={openSecondDoc}>
                <div className="text">Document 2</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
              <div className="doc" onClick={openThirdDoc}>
                <div className="text">Document 3</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
              <div className="doc" onClick={openFourthDoc}>
                <div className="text">Document 4</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
            </div>
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

            <h2>Research Sources</h2>

            <div className="docs-wrapper">
              <div className="doc">
                <div className="text">Competitor analysis</div>
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
