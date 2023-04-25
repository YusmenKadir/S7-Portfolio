import React from "react";
import "../App.scss";
import projectPlanImage from "../assets/project-plan.png";
import reflectionImage from "../assets/reflection.png";
import prototypingImage from "../assets/prototypingg.png";
import testingImage from "../assets/test.png";
import codingImage from "../assets/coding.png";
import researchImage from "../assets/research.png";

const IndividualProject = () => {
  return (
    <div className="individual-project">
      <div className="individual-project-hero">
        <div className="overlay"></div>
        <h1>Portfolio Website</h1>
      </div>

      <div className="zig-zag-wrapper">
        <div className="zig-zag-wrapper-text">
          <h1>01.Project plan</h1>
          <p>
            I developed a project plan for my personal portfolio website in
            order to organize and prioritize the tasks needed to create a
            professional and visually appealing website. The plan described the
            goal for the project. With formulated research questions and
            corresponding methods to answer them. By following this plan, I was
            able to stay focused, track progress, and ensure that my portfolio
            website meets my objectives and showcases my products effectively.
          </p>
          <button
            className="cta-button"
            onClick={() =>
              window.open(
                "https://busy-mallet-49a.notion.site/Project-Plan-c7071a584cea4554bb735a2f0ece827d"
              )
            }
          >
            Read more
          </button>
        </div>
        <div className="zig-zag-wrapper-img">
          <img src={projectPlanImage} alt="#" />
        </div>
      </div>

      <div className="zig-zag-wrapper">
        <div className="zig-zag-wrapper-img">
          <img src={researchImage} alt="#" />
        </div>
        <div className="zig-zag-wrapper-text">
          <h1>02.Research</h1>
          <p>
            I formulated a main research question with sub questions deriving
            from it. For each research question I did community research. I made
            a search plan, identified relevant keywords and searched for
            resources on the web in order to find contextual information,
            guidance and best practices to answer my primary research question.
          </p>
          <button
            className="cta-button"
            onClick={() =>
              window.open(
                "https://busy-mallet-49a.notion.site/Research-114f7128f09e4488b579e9a33db21973"
              )
            }
          >
            Read more
          </button>
        </div>
      </div>

      <div className="zig-zag-wrapper">
        <div className="zig-zag-wrapper-text">
          <h1>03.Prototype</h1>
          <p>
            After the research I stepped into prototyping. First I visualized my
            ideas by creating low fidelity prototypes. After that I continued by
            creating high fidelity protototypes of the product. I used tools
            like Whimsical & Figma to achieve the goal. I was able to experiment
            with different layouts and UI elements, and refine the user
            experience before diving into the actual development. The
            prototyping process helped me to identify potential issues early on
            and make necessary adjustments, saving time and effort in the long
            run.
          </p>
          <button
            className="cta-button"
            onClick={() =>
              window.open(
                "https://busy-mallet-49a.notion.site/Prototype-343e5fc26d6445309a4a06c909ac185a"
              )
            }
          >
            Read more
          </button>
        </div>
        <div className="zig-zag-wrapper-img">
          <img src={prototypingImage} alt="#" />{" "}
        </div>
      </div>

      <div className="zig-zag-wrapper">
        <div className="zig-zag-wrapper-img">
          <img src={codingImage} alt="#" />
        </div>
        <div className="zig-zag-wrapper-text">
          <h1>04.Implement</h1>
          <p>
            To implement my portfolio website, I started by selecting the
            appropriate technologies that would allow me to achieve my goals.
            Given my priority for a fast-performing website, I chose to use
            React.js due to its many benefits, such as its ability to handle
            large amounts of data and its modular structure. Additionally, I
            incorporated other technologies such as Sass and Framer Motion to
            enhance the visual aspects of the website and provide a better user
            experience. With these technologies in place, I was able to
            effectively and efficiently develop the website, bringing my vision
            to life.
          </p>
          <button
            className="cta-button"
            onClick={() =>
              window.open("https://github.com/YusmenKadir/S7-Portfolio")
            }
          >
            View code
          </button>
        </div>
      </div>

      <div className="zig-zag-wrapper">
        <div className="zig-zag-wrapper-text">
          <h1>05.Test</h1>
          <p>
            For the testing phase, I wanted to ensure that the website is usable
            and user-friendly. To achieve this, I conducted a 5 seconds test to
            see if the key elements of the website are noticeable and intuitive.
            The test results helped me identify areas for improvement and make
            necessary adjustments. In later stages, I plan to conduct more
            thorough usability testing to ensure the website is easy to use and
            navigate.
          </p>
          <button
            className="cta-button"
            onClick={() =>
              window.open(
                "https://busy-mallet-49a.notion.site/Usability-test-c6040e0b863f4f37bb849cc062213217"
              )
            }
          >
            Read more
          </button>
        </div>
        <div className="zig-zag-wrapper-img">
          <img src={testingImage} alt="#" />
        </div>
      </div>

      <div className="zig-zag-wrapper">
        <div className="zig-zag-wrapper-img">
          <img src={reflectionImage} alt="#" />
        </div>
        <div className="zig-zag-wrapper-text">
          <h1>06.Reflection</h1>
          <p>
            During the development of my portfolio website, I had regular
            communication with my semester coach, which proved to be very
            beneficial. I was able to receive valuable feedback on my work,
            which helped me to refine my research questions and take into
            consideration the available time. It was an excellent opportunity
            for me to learn from an experienced professional and make the
            necessary adjustments to ensure the project's success.
          </p>
          <button
            className="cta-button"
            onClick={() =>
              window.open(
                "https://busy-mallet-49a.notion.site/Reflection-7905160d9974492aab7961e07ddc93ee"
              )
            }
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
