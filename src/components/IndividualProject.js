import React from "react";
import "../App.scss";
import projectPlanImage from "../assets/project-plan.png";
import reflectionImage from "../assets/reflection.png";
import prototypingImage from "../assets/prototypingg.png";
import testingImage from "../assets/test.png";
import codingImage from "../assets/coding.png";
import researchImage from "../assets/research.png";
import { useNavigate } from "react-router";
import websiteSolutionImage from "../assets/website-solution.png";
import designThinkingImage2 from "../assets/designThinkingImage2.png";
import processPortfolioImage from "../assets/processPortfolio.png";
import cmdMethodsPackImage from "../assets/cmdMethodsPack.png";

const IndividualProject = () => {
  const navigate = useNavigate();

  const navigateToResearchPage = () => {
    navigate("/individual-project/research");
  };
  const navigateToReflectionPage = () => {
    navigate("/individual-project/reflection");
  };
  const navigateToPrototypePage = () => {
    navigate("/individual-project/prototype");
  };
  const navigateToTestPage = () => {
    navigate("/individual-project/test");
  };

  const openCmd = () => {
    window.open("https://cmdmethods.nl/", "_blank");
  };

  const openIct = () => {
    window.open("https://ictresearchmethods.nl/Methods", "_blank");
  };

  return (
    <div className="individual-project">
      <div className="individual-project-hero">
        <div className="overlay"></div>
        <h1>Portfolio Website</h1>
      </div>

      {/* Project intro */}

      <div className="individual-project-intro">
        <div className="intro-heading">
          <h1>Introduction</h1>
          <p>
            The goal of the project was to design a portfolio website that will
            show target users the products I have done during the semester in
            the simplest and most interactive way. This page showcases the
            process I followed and steps I took to tackle the project.
          </p>
        </div>

        <div className="intro-img">
          <img src={websiteSolutionImage} alt="#" />
        </div>
      </div>

      {/* Project process */}
      <div className="individual-project-process">
        <h1>The process</h1>
        <div className="wrapper">
          <div className="container-image">
            <img
              src={processPortfolioImage}
              alt="#"
              // className="design-thinking-img"
            />
            {/* <img
              src={cmdMethodsPackImage}
              alt="#"
              className="design-thinking-img"
            /> */}
          </div>

          <div className="container-text">
            <p>
              Due to the nature of the project and the fact that I had only 4
              weeks to work on it I couldn’t follow the design thinking
              methodology completely therefore I came up with my own process and
              I broke the project into separate phases: Research , Prototype ,
              Implement and Test. I used methods from the
              <span onClick={openCmd}>CMD methods pack</span> and
              <span onClick={openIct}>ICT research methods</span> in order to
              get the best research results possible.
            </p>
          </div>
        </div>
      </div>

      <div className="individual-project-box">
        <h1>Project Plan</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              I developed a project plan for my personal portfolio website in
              order to organize and prioritize the tasks needed to create a
              professional and visually appealing website. The plan described
              the goal for the project.
            </p>

            <p>
              With formulated research questions and corresponding methods to
              answer them. By following this plan, I was able to stay focused,
              track progress, and ensure that my portfolio website meets my
              objectives and showcases my products effectively.
            </p>

            <button>Open Project Plan</button>
          </div>
          <div className="container-image">
            <img
              src={projectPlanImage}
              alt="#"
              className="design-thinking-img"
            />
          </div>
        </div>
      </div>

      <div className="individual-project-box">
        <h1>Research</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              I formulated a main research question with sub questions deriving
              from it. For each research question I did literature research. I
              made a search plan, identified relevant keywords and searched for
              resources on the web in order to find contextual information,
              guidance and best practices to answer my primary research
              question.
            </p>

            <button onClick={navigateToResearchPage}>Read more</button>
          </div>
          <div className="container-image">
            <img src={researchImage} alt="#" className="design-thinking-img" />
          </div>
        </div>
      </div>

      <div className="individual-project-box">
        <h1>Prototype</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              After the research I stepped into prototyping. First I visualized
              my ideas by creating low fidelity prototypes. After that I
              continued by creating high fidelity protototypes of the product. I
              used tools like Whimsical & Figma to achieve the goal. I was able
              to experiment with different layouts and UI elements, and refine
              the user experience before diving into the actual development. The
              prototyping process helped me to identify potential issues early
              on and make necessary adjustments, saving time and effort in the
              long run.
            </p>

            <button onClick={navigateToPrototypePage}>Read more</button>
          </div>
          <div className="container-image">
            <img
              src={prototypingImage}
              alt="#"
              className="design-thinking-img"
            />
          </div>
        </div>
      </div>

      <div className="individual-project-box">
        <h1>Implement</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              To implement my portfolio website, I started by selecting the
              appropriate technologies that would allow me to achieve my goals.
              Given my priority for a fast-performing website, I chose to use
              React.js due to its many benefits, such as its ability to handle
              large amounts of data and its modular structure. Additionally, I
              incorporated other technologies such as Sass and Framer Motion to
              enhance the visual aspects of the website and provide a better
              user experience. With these technologies in place, I was able to
              effectively and efficiently develop the website, bringing my
              vision to life.
            </p>

            <button
              onClick={() =>
                window.open("https://github.com/YusmenKadir/S7-Portfolio")
              }
            >
              View source code
            </button>
          </div>
          <div className="container-image">
            <img src={codingImage} alt="#" className="design-thinking-img" />
          </div>
        </div>
      </div>

      <div className="individual-project-box">
        <h1>Test</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              For the testing phase, I wanted to ensure that the website is
              usable and user-friendly. I used Useberry testing tool to test the
              website The test results helped me identify areas for improvement
              and make necessary adjustments.
            </p>

            <button onClick={navigateToTestPage}>Read more</button>
          </div>
          <div className="container-image">
            <img src={testingImage} alt="#" className="design-thinking-img" />
          </div>
        </div>
      </div>

      <div className="individual-project-box">
        <h1>Reflection</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              During the development of my portfolio website, I had regular
              communication with my semester coach, which proved to be very
              beneficial. I was able to receive valuable feedback on my work,
              which helped me to refine my research questions and take into
              consideration the available time. It was an excellent opportunity
              for me to learn from an experienced professional and make the
              necessary adjustments to ensure the project's success.
            </p>

            <button onClick={navigateToReflectionPage}>Read more</button>
          </div>
          <div className="container-image">
            <img
              src={reflectionImage}
              alt="#"
              className="design-thinking-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
