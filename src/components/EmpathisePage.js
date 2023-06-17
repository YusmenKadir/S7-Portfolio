import React, { useState, useRef, useEffect } from "react";
import literatureStudyImg from "../assets/literatureStudyImg.png";
import literaturecmdImg from "../assets/cmdliterature.png";
import { BsSearch, BsKeyboard } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import PrevNext from "./PrevNext";
import PageIntroduction from "./PageIntroduction";
import documentAnalysisImage from "../assets/docanalysisImg.png";
import reviewedDocsImage from "../assets/reviewedDocsImg.png";
import cdmInterviewImg from "../assets/cmdInterview.png";
import documentOne from "../documents/Grip Samevatting Focusgroepen.pdf";
import documentTwo from "../documents/Grip Student Ervaring Gehoorbescherming.pdf";
import documentThree from "../documents/Grip Student Klachten.pdf";
import documentFour from "../documents/Grip Student Overige Klachten.pdf";
import documentAnalysisDoc from "../documents/Document-analysis-group-project.pdf";
import interviewAnalysisDoc from "../documents/User-Interview-Group-Project.pdf";
import userInterviewTranscript from "../documents/USER_INTERVIEW_TRANSCRIPT.pdf";
import userInterviewGuide from "../documents/User_Interview_Guide.pdf";
import userInterviewQuestions from "../documents/User_Interview_Questions.pdf";
import { useLocation, useNavigate } from "react-router";

const EmpathisePage = () => {
  // const [isSticky] = useState(true);
  const navigate = useNavigate();
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

  const openDocAnalysis = () => {
    window.open(documentAnalysisDoc, "_blank");
  };

  const openUserInterview = () => {
    window.open(interviewAnalysisDoc, "_blank");
  };

  const openInterviewScript = () => {
    window.open(userInterviewTranscript, "_blank");
  };

  const openInterviewGuide = () => {
    window.open(userInterviewGuide, "_blank");
  };

  const openInterviewQuestions = () => {
    window.open(userInterviewQuestions, "_blank");
  };

  const openPersonaPage = () => {
    navigate("/group-project/define#persona");
  };
  return (
    <div className="emphatise-page">
      <PageIntroduction
        pageName="emphatise"
        pageIntroText=" Welcome to the Empathise phase products page. In this page you will
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
              answer this tricky question. I was determined to provide the best
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
              highlighted the important points to my colleagues to ensure we
              will incorporate the results from this research into our product.
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
                <span className="chip">human factors in ux design</span>
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
              To conclude the integration of the above mentioned steps into our
              design process can ensure the product we are creating is
              user-friendly, safe and comfortable for wide range of users.
            </p>

            <h2>Research sources</h2>
            <p>
              Wikipedia (n.d.). Human factors and ergonomics, from
              https://en.wikipedia.org/wiki/Human_factors_and_ergonomics
            </p>

            <p>
              Mandy Cornwell (2022, 12 Feb).Inclusion first: How to make your
              product accessible and inclusive, from
              https://uxdesign.cc/inclusion-first-how-to-make-your-product-accessible-and-inclusive-b8ccbeb24b22
            </p>
            <p>
              UX spot.io (n.d.).Understand human factors, from
              https://uxspot.io/understand-human-factors.html
            </p>
            <p>
              Cint (2022, 6 Feb).Why market research is important, from
              https://www.cint.com/blog/why-market-research-is-important
            </p>
            <p>
              Bjorn Rohles (2022, 20 Dec).More diversity for better experiences,
              from https://rohles.net/en/articles/diversity-user-experience
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
              After conducting literature study in the section above in order to
              answer an important research question, the next task for me was to
              conduct document analysis and dive into the documentation we
              received from our stakeholder.
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

            <p>
              I reviewed in detail all the documents that were provided to us
              and extracted all the important points to formulate the results
              and the conclusion.
            </p>

            <h2>Results</h2>
            <p>
              The analysis of the first document concluded that most
              participants were not aware of the occupational health and safety
              standards with regard to noise. All teachers experienced physical
              and mental health issues, including headaches, fatigue, voice
              complaints, irritability, decreased hearing, and tinnitus due to
              noise pollution. The use of hearing protection equipment was found
              to be effective, but it was found to have negative effects on
              communication with students.
            </p>

            <p>
              The analysis of the second document revealed three themes:
              importance, functionality, and communication. The results showed
              that the use of hearing protection equipment was crucial for
              physical education teachers to protect their hearing, and the
              majority of participants used them regularly.
            </p>

            <p>
              The analysis of the third document concluded that physical
              education teachers suffer from various complaints, including
              fatigue, headaches, dizziness, voice complaints, stimulus
              sensitivity, and concentration, as a result of exposure to noise
              in sports facilities.
            </p>

            <p>
              According to the analysis of the last document, the main
              complaints among physical education teachers in primary education
              due to noise pollution are fatigue, headaches, irritability,
              reduced focus, and voice problems. The study found that excessive
              noise pollution leads to fatigue, headache, irritability, and
              reduced focus among the teachers.{" "}
              <span onClick={openDocAnalysis}>Read more</span>
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
                <div className="text">Grip Samevatting Focusgroepen</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
              <div className="doc" onClick={openSecondDoc}>
                <div className="text">
                  Grip Student Ervaring Gehoorbescherming
                </div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
              <div className="doc" onClick={openThirdDoc}>
                <div className="text">Grip Student Klachten</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
              <div className="doc" onClick={openFourthDoc}>
                <div className="text">Grip Student Overige Klachten</div>
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
              The conducted document analysis above provided us with valuable
              information however that wasn’t sufficient to fully understand the
              problems faced by PE teachers in managing sound levels during
              classes. I knew we should conduct our own interviews therefore as
              a point of contact person I managed to arrange that by contacting
              the husband of the participant who was a friend of mine. That was
              the only interview we managed to conduct because we faced
              limitations in finding other teachers. Nevertheless the interview
              proved to be highly beneficial to our research process.
            </p>

            <h2>Question</h2>
            <p>What insights are valuable to teachers?</p>
            <p>
              Are there any existing measures for noise control in primary
              schools?
            </p>

            <div className="method-date-keywords-wrapper">
              <div>
                <h2>Method</h2>
                <img src={cdmInterviewImg} alt="#" />
              </div>
            </div>

            <h2>Why</h2>
            <p>
              The interview I conducted was an important component of our
              research process due to several reasons. First it provided us with
              an opportunity to gather insights and perspectives directly from
              our target user group. Secondly it allowed us to compare and
              contrast the information extracted from the document analysis with
              the actual experiences of a teacher. Thirdly it enabled us to
              engage in a conversation with the teacher and try to uncover new
              perspectives which can enrich our understanding of the problem and
              help us further with refining the features and design of our
              digital solution. Lastly the interview helped me to gather
              specific information about her background, experience and
              challenges and that served as a foundation for me to develop a
              more accurate and relatable{" "}
              <span onClick={openPersonaPage}>
                User persona in the define phase.
              </span>
            </p>

            <h2>How</h2>
            <p>
              The interview was conducted via Microsoft Teams. I was the
              interviewer and my colleagues Prakasa and Tanmay were observers. I
              tried to follow our interview guidelines and ask the participant
              specific questions that we formulated beforehand. At a certain
              point the interview became an open discussion which was a good
              indication that the participant was feeling comfortable and was
              able to share more valuable insights despite having difficulties
              in speaking English.
            </p>

            <h2>Results</h2>
            <p>
              During the user interview with Alinde De Zwaan Ifionu, a primary
              school teacher with 20 years of experience, valuable insights were
              gathered regarding the impact of noise in the classroom. Although
              not a PE teacher herself by diploma, she provided insights into
              the noise levels experienced during PE classes and highlighted the
              effectiveness of using paper traffic lights to improve
              concentration in regular classes. The participant also expressed
              interest in using a smartwatch to measure sound levels and
              mentioned the difference in noise control between teaching younger
              and older students.{" "}
              <span onClick={openUserInterview}>Read more</span>
            </p>

            <p></p>

            <h2>Conclusion</h2>
            <p>
              The interview with Alinde De Zwaan Ifionu, a primary school
              teacher from the Netherlands, revealed that noise levels during PE
              classes can be a challenge, particularly during football or group
              games. However, the use of paper traffic lights has been effective
              in improving student concentration in regular classes which
              answered our question 'Are there any existing measures for noise
              control in primary schools?'. The participant also suggested the
              potential use of a smartwatch to measure sound levels in
              classrooms.
            </p>

            <h2>Recommendation</h2>
            <p>
              In the future schools may implement a similar tool like the paper
              traffic lights inside gyms to help PE teachers become more aware
              of high sound levels during their classes.
            </p>

            <h2>Related documents</h2>

            <div className="docs-wrapper" onClick={openInterviewGuide}>
              <div className="doc">
                <div className="text">User Interview Guide</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
            </div>
            <div className="docs-wrapper" onClick={openInterviewScript}>
              <div className="doc">
                <div className="text">Interview Transcript</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
            </div>
            <div className="docs-wrapper" onClick={openInterviewQuestions}>
              <div className="doc">
                <div className="text">Interview Questions</div>
                <div className="icon">
                  <IoMdOpen size={25} />
                </div>
              </div>
            </div>
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
