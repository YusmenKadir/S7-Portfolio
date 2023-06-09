import React from "react";
import "../App.scss";

import reflectionImage from "../assets/reflection.png";
import prototypingImage from "../assets/watchImage.png";
import appreciationImg from "../assets/appreciationImg.png";

import designThinkingImage from "../assets/designthinking.png";
import designerImage from "../assets/designer.png";
import timemanagementImage from "../assets/timemanagement.png";
import groupImage from "../assets/team.png";
import solutionImg from "../assets/Decibelle.png";
import empathiseImg from "../assets/empathiseImage.png";
import defineImg from "../assets/defineImage.png";
import ideateImg from "../assets/ideateImage.png";
import timelineImg from "../assets/processImg.png";
import testImg from "../assets/test.png";
import softwareImg from "../assets/sofwareImg.png";
import recommendationsImg from "../assets/recommendationsImg.png";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const GroupProject = () => {
  const navigate = useNavigate();

  const navigateToEmpathisePage = () => {
    navigate("/group-project/empathise");
  };

  const navigateToDefinePage = () => {
    navigate("/group-project/define");
  };

  const navigateToIdeatePage = () => {
    navigate("/group-project/ideate");
  };

  const navigateToPrototypePage = () => {
    navigate("/group-project/prototype");
  };

  const navigateToTestPage = () => {
    navigate("/group-project/test");
  };

  const navigateToSoftwarePage = () => {
    navigate("/group-project/software-system");
  };

  return (
    <div className="group-project">
      {/* hero */}
      <div className="group-project-hero">
        <div className="overlay"></div>
        <h1>Group Project</h1>
      </div>

      {/* Project intro */}

      <div className="group-project-intro">
        <div className="intro-heading">
          <h1>Introduction</h1>
          <p>
            On this page, you will find an overview of the collaborative project
            that I had the privilege to work on with my talented colleagues.
            Together with Tanmay, Wolfgang, Prakasa, Oliver and Majid we
            embarked on an exciting journey of exploration, innovation, and
            teamwork. Throughout the semester, we dedicated ourselves to
            developing a remarkable idea that I am proud to present to you.
          </p>

          <p>
            As you navigate through this page, you will discover the various
            phases of our project, showcasing my individual contributions. From
            empathizing with user needs to defining project requirements,
            ideating creative solutions, prototyping, testing, and designing the
            software system, I did my best to deliver a good product!
          </p>
        </div>

        <div className="intro-img">
          <img src={groupImage} alt="#" />
        </div>
      </div>

      {/* Project summary */}

      <div className="group-project-summary">
        <h1>Summary</h1>

        <div className="group-project-summary-grid">
          <div className="summary-image">
            <img src={solutionImg} alt="#" />
          </div>

          <div className="summary-info">
            <div className="problem-statement-container">
              <h2>Design Challenge From Stakeholder</h2>
              <p>
                How can physical education teachers in primary schools get more
                insights into the sound levels and stress during their classes?
              </p>
            </div>

            <div className="proposed-solution-container">
              <h3>Proposed solution</h3>
              <p>
                A cross-device smartwatch and mobile app that provides real-time
                noise level insights, alerts wearers to peak sound levels, and
                suggests safe spaces with haptic feedback and vibrations. The
                app also records and visualises sound data, offers health
                insights, and provides information on potential health risks due
                to noise pollution.Additionally, it showcases gym hall heat maps
                per scheduled class and assists PE teachers in navigating to
                safer areas based on surrounding sound levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Role  */}

      <div className="group-project-role">
        <h1>Role</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              As the Point of contact, my role was to be the main point of
              contact for the project, facilitating communication between team
              members, stakeholders, and other relevant parties. I was
              responsible for relaying information, addressing inquiries, and
              coordinating activities to ensure effective collaboration and
              smooth project execution. My role as the POC was crucial in
              maintaining clear and efficient communication channels throughout
              the project.
            </p>
          </div>
          <div className="container-image">
            <img src={designerImage} alt="#" className="design-thinking-img" />
          </div>
        </div>
      </div>

      {/* project time */}
      <div className="group-project-time">
        <h1>Time</h1>
        <div className="wrapper">
          <div className="container-image">
            <img
              src={timemanagementImage}
              alt="#"
              className="design-thinking-img"
            />
          </div>

          <div className="container-text">
            <p>
              We had 12 weeks in total to work on this challenging project. We
              followed the SCRUM methodology having 6 separate sprints. Each
              sprint lasted for 2 weeks. We had regular sprint retrospectives
              and plannings.
            </p>
          </div>
        </div>
      </div>

      {/* Project Timeline */}

      <div className="group-project-timeline">
        <h1>Timeline</h1>
        <div className="wrapper">
          <div className="container-text">
            <h2>Sprint 0</h2>
            <p>Project setup and research initiation</p>
            <h2>Sprint 1</h2>
            <p>Continuation of research and start of ideation</p>
            <h2>Sprint 3</h2>
            <p> Ideation and concept generation.</p>
            <h2>Sprint 4</h2>
            <p>Prototyping and iteration.</p>
            <h2>Sprint 5</h2>
            <p>Continuation prototyping, testing and iteration.</p>
            <h2>Sprint 6</h2>
            <p>Testing and documentation</p>
          </div>
          <div className="container-image">
            <img src={timelineImg} alt="#" className="design-thinking-img" />
          </div>
        </div>
      </div>
      {/* Project process */}
      <div className="group-project-process">
        <h1>The process</h1>
        <div className="wrapper">
          <div className="container-image">
            <img
              src={designThinkingImage}
              alt="#"
              className="design-thinking-img"
            />
          </div>

          <div className="container-text">
            <p>
              Our project embraced the powerful framework of design thinking, a
              human-centered approach to problem-solving. The image displayed on
              the left side represents the design thinking methodology, which
              guided our journey from empathizing with the needs of physical
              education teachers in primary schools to developing an innovative
              solution.
            </p>
          </div>
        </div>
      </div>

      <div className="group-project-emphatise">
        <h1>Emphatise</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              In the Empathize phase of the design thinking methodology,
              understanding the needs and experiences of users is crucial for
              creating effective solutions.
            </p>

            <p>
              To assist the team in gaining valuable insights, I took the
              initiative to perform various activities such as:
            </p>

            <Link to="/group-project/empathise#literature-study">
              {" "}
              <p>
                <span>
                  <AiOutlineCheck size={20} color="#eb6f5c" />
                </span>
                Literature study
              </p>
            </Link>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Document analysis
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              User Interview
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Survey
            </p>

            <p>
              These efforts enabled me to contribute meaningful data and
              perspectives to shape our project. Click the button below to
              explore my empathize activities and discover the key findings that
              drove our solution.
            </p>

            <button onClick={navigateToEmpathisePage}>Read more</button>
          </div>
          <div className="container-image">
            <img src={empathiseImg} alt="#" className="design-thinking-img" />
          </div>
        </div>
      </div>
      <div className="group-project-define">
        <h1>Define</h1>
        <div className="wrapper">
          <div className="container-image">
            <img src={defineImg} alt="#" className="design-thinking-img" />
          </div>
          <div className="container-text">
            <p>
              In the Define phase of the design thinking methodology, it is
              essential to define the problem space and gain a deeper
              understanding of the user's needs and expectations. This phase
              lays the foundation for developing effective solutions.
            </p>

            <p>
              As an active member of the team, I played a crucial role in
              contributing to the Define phase through various activities,
              including:
            </p>

            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Problem analysis
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Persona
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Customer Journey Map
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Competitor Analysis
            </p>

            <p>
              By exploring my activities in the Define section, you can gain
              insights into the problem analysis, persona development, customer
              journey mapping, and competitor analysis that drove our
              decision-making process. Click the button below to delve deeper
              into my contributions during the Define phase and discover how
              they influenced our solution design.
            </p>

            <button onClick={navigateToDefinePage}>Read more</button>
          </div>
        </div>
      </div>
      <div className="group-project-ideate">
        <h1>Ideate</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              In the Ideate phase of the design thinking methodology, the goal
              is to generate a wide range of creative ideas and concepts that
              address the identified problem. This phase encourages
              open-mindedness and fosters innovation.
            </p>

            <p>
              As an active participant in the team, I made significant
              contributions during the Ideate phase through various activities,
              including:
            </p>

            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Initial Sketches
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Moscow analysis
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              User flows
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              UI Mood board
            </p>

            <p>
              These contributions during the Ideate phase played a crucial role
              in generating and refining ideas, prioritizing features, and
              defining the overall design direction. By exploring my activities
              in the Ideate section, you can gain insights into the initial
              sketches, MoSCoW analysis, User flows, and UI mood board that
              shaped our ideation process. Click the button below to dive deeper
              into my contributions during the Ideate phase and discover the
              creative journey that led to our final solution.
            </p>

            <button onClick={navigateToIdeatePage}>Read more</button>
          </div>
          <div className="container-image">
            <img src={ideateImg} alt="#" className="design-thinking-img" />
          </div>
        </div>
      </div>
      <div className="group-project-prototype">
        <h1>Prototype</h1>
        <div className="wrapper">
          <div className="container-image">
            <img
              src={prototypingImage}
              alt="#"
              className="design-thinking-img"
            />
          </div>
          <div className="container-text">
            <p>
              In the Prototype phase of the design thinking methodology, the
              focus is on transforming ideas into tangible representations that
              can be tested and validated. Prototypes allow us to gather
              feedback, iterate on designs, and refine the user experience.
            </p>

            <p>
              During the Prototype phase, I played an active role in creating
              prototypes for our smartwatch app. My contributions included:
            </p>

            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Low-fidelity prototypes
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              High-fidelity prototypes
            </p>

            <p>
              Through the creation of both low-fidelity and high-fidelity
              prototypes, we were able to iterate, refine, and validate our
              design ideas. These prototypes provided valuable insights and user
              feedback, enabling us to make informed decisions and improve the
              overall user experience of the smartwatch app. Click the button
              below to explore my prototype contributions and discover the
              evolution of our design through the Prototype phase.
            </p>

            <button onClick={navigateToPrototypePage}>Read more</button>
          </div>
        </div>
      </div>

      {/* testing section  */}
      <div className="group-project-test">
        <h1>Test</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              In the Test phase of the design thinking methodology, evaluating
              the usability and effectiveness of the solution is essential to
              ensure it meets the needs of the users. As part of this phase, I
              conducted usability testing to gather feedback and validate the
              design decisions.
            </p>

            <p>During the Test phase, my main contribution included:</p>

            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Usability testing
            </p>

            <p>
              By exploring my activities in the Test section, you can learn more
              about the usability testing process, the insights gained, and the
              iterative improvements made based on user feedback. Click the
              button below to delve deeper into my contributions during the Test
              phase and discover how user testing shaped our final solution.
            </p>

            <button onClick={navigateToTestPage}>Read more</button>
          </div>
          <div className="container-image">
            <img src={testImg} alt="#" className="design-thinking-img" />
          </div>
        </div>
      </div>

      {/* software system design  */}
      <div className="group-project-software">
        <h1>Software system design </h1>
        <div className="wrapper">
          <div className="container-image">
            <img src={softwareImg} alt="#" className="design-thinking-img" />
          </div>
          <div className="container-text">
            <p>
              In the Software System Design section, my focus was on designing
              the software system for our project.
            </p>

            <p>My contributions here were focused on:</p>

            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              System context diagram
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Container diagram
            </p>

            <p>
              Click the button below to explore the Software System Design
              section and delve into the details of our system architecture and
              component selection process.
            </p>

            <button onClick={navigateToSoftwarePage}>Read more</button>
          </div>
        </div>
      </div>

      {/* recommendations section  */}
      <div className="group-project-recommendations">
        <h1>Recommendations</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              In the Project Recommendations section, I provide insights and
              recommendations based on the experience and knowledge gained
              throughout the project. This section serves as a place to share my
              thoughts and suggestions for further improvements and future
              iterations.
            </p>

            {/* <p>
              To assist the team in gaining valuable insights, I took the
              initiative to perform various activities such as:
            </p> */}

            {/* <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Project Recommendations
            </p> */}

            <p>
              By exploring the Project Recommendations section, you can gain
              valuable insights into the lessons learned and the suggested steps
              to further refine and optimize our project.
            </p>

            <button>Read more</button>
          </div>
          <div className="container-image">
            <img
              src={recommendationsImg}
              alt="#"
              className="design-thinking-img"
            />
          </div>
        </div>
      </div>
      {/* appreciation section  */}
      <div className="group-project-appreciation">
        <h1>Stakeholder appreciation</h1>
        <div className="wrapper">
          <div className="container-image">
            <img
              src={appreciationImg}
              alt="#"
              className="design-thinking-img"
            />
          </div>
          <div className="container-text">
            <p>
              In the Stakeholder Appreciation section, I have gathered feedback
              from both the stakeholders and my peers regarding my participation
              and contribution to the project. This section aims to showcase
              their appreciation and evaluation of my performance throughout the
              project.
            </p>

            <p>Here you can read about the following:</p>

            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Stakeholder appreciation
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Peer review
            </p>

            {/* <p>
              The feedback from stakeholders and teammates provides valuable
              insights into how they perceived my role and the impact I had on
              the project. Click the button below to explore more.
            </p> */}

            <button>Read more</button>
          </div>
        </div>
      </div>
      <div className="group-project-reflection">
        <h1>Reflection</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              To fulfill Learning Outcome 6 of Personal Leadership, I have
              embarked on a methodical journey of reflecting on my professional
              identity and personal development. Through deliberate and
              structured reflection, I have gained valuable insights into my
              work, actions, and aspirations for the future. Click the button to
              read more about that!
            </p>

            <button>Read more</button>
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

export default GroupProject;
