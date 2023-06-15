import React, { useRef, useEffect } from "react";
import "../App.scss";
import PageIntroduction from "./PageIntroduction";
import { useLocation } from "react-router";
import moscowImg from "../assets/MosCow.png";
import myMoodboardImg from "../assets/MyMoodboard.png";
import sketchesImg from "../assets/UI Sketches.png";
import userFlowImg from "../assets/User Flow Diagram.png";
import PrevNext from "./PrevNext";
const IdeatePage = () => {
  const location = useLocation();
  const moscowRef = useRef(null);
  const moodboardRef = useRef(null);
  const flowsRef = useRef(null);
  const sketchesRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#moscow" && moscowRef.current) {
      moscowRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (location.hash === "#uimoodboard" && moodboardRef.current) {
      moodboardRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#user-flows" && flowsRef.current) {
      flowsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#sketches" && sketchesRef.current) {
      sketchesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const openMoscow = () => {
    window.open(
      "https://toolkits.dss.cloud/design/method-card/moscow/",
      "_blank"
    );
  };
  const openMoodboard = () => {
    window.open(
      "https://cmdmethods.nl/cards/stepping-stones/mood-board",
      "_blank"
    );
  };

  const openDribble = () => {
    window.open("https://dribbble.com/", "_blank");
  };

  const openSketching = () => {
    window.open("https://cmdmethods.nl/cards/workshop/sketching", "_blank");
  };

  return (
    <div className="ideate-page">
      <PageIntroduction
        pageName="ideate"
        pageIntroText=" Welcome to the Ideate phase products page. In this page you will
         all personal products created as well as products that I contributed to. The
        products showcased justify learning outcomes 1, 2 and 5. Keep scrolling down and
        enjoy reading!"
        learningOutcome="Learning outcome 1: User interaction (analysis & advice)"
        learningOutcome2="Learning outcome 2: User interaction (execution & validation) "
        learningOutcome3="Learning outcome 5: Investigative problem solving"
      />

      <div className="ideate-page-moscow" ref={moscowRef}>
        <h1>MoSCoW</h1>

        <div className="wrapper">
          <div className="container-image">
            <img src={moscowImg} alt="#" />

            <iframe
              title="title"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxVPbjUqw85PQHT3FQNmOiZ%2FMosCow%3Ftype%3Dwhiteboard%26t%3DMzOT3qObdFQftcMv-1"
            ></iframe>
          </div>
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              After we finalized our concept the next important step was to use
              the MosCow method to streamline and pinpoint the essential
              features of our app. This helped us to to identify the must-have,
              should-have, could-have, and won't-have features of our
              application. I played a crucial role here as it can be seen in the
              embedded FigJam file because the inputs I provided in the fields
              ultimately influenced features of our app.
            </p>
            <h2>Question</h2>
            <p>What insights are valuable to teachers?</p>
            <h2>Method</h2>
            <p onClick={openMoscow} className="method">
              MoSCoW
            </p>
            <h2>Why</h2>

            <p>
              The MoSCoW method helped us prioritize the features and
              requirements based on their importance. By using this method we
              identified the must-have features that are most important for
              providing insights into high sound levels, such as real-time
              alerts and safe space suggestions. It allowed us to focus on
              delivering the most important functionalities first by ensuring
              that we will effectively address the primary needs of our target
              users.
            </p>

            <h2>How</h2>

            <p>
              This was a group activity and each team member contributed with
              this own ideas by placing sticky notes in the categorized columns.
              I added my ideas to the MosCow table. After that we discussed our
              ideas and we collectively created our final MosCow prioritization.
            </p>
            <h2>Results</h2>
            <p>
              The results from the MosCow prioritization showcased that our app
              will prioritize on having simple and easy to read interface,
              real-time decibel measurement feature, customisable threshold
              feature. Additional features like safe space suggestions and peak
              noise alerts. Showcasing complex visuals and detailed graphs of
              data won’t be a priority.
            </p>

            <h2>Conclusion</h2>
            <p>
              The results we gained via the MosCow method provided us with
              valuable clarity on the required screens for our app and enabled
              us to refine the user flows and subsequently create a cohesive and
              intuitive user experience.
            </p>
          </div>
        </div>
      </div>

      <div className="ideate-page-flows" ref={flowsRef}>
        <h1>User flows</h1>

        <div className="wrapper">
          <div className="container-image">
            <img src={userFlowImg} alt="#" />
          </div>
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              After we completed the MoSCoW analysis and we defined the
              essential features of our app the next critical step was to
              visualise the user journey and interactions.
            </p>
            <h2>Question</h2>
            <p>
              How can valuable gained insights be presented to the end users?
            </p>
            <h2>Method</h2>
            <p className="method">User Flow Diagram</p>
            <h2>Why</h2>

            <p>
              This process was a crucial step in the design process of our app
              because we gained a deeper understanding of the journey and
              interactions of users within the application by visually mapping
              out the paths they will take. The user flow diagram served as a
              blueprint for the structure and functionality of our app.
            </p>

            <h2>How</h2>

            <p>We worked as a team </p>
            <h2>Results</h2>
            <p></p>

            <h2>Conclusion</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="ideate-page-moodboard" ref={moodboardRef}>
        <h1>UI Mood Board</h1>
        <div className="wrapper">
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              After we completed the user flows which was a crucial step in
              understanding the journey and interactions of our users within our
              app, we then proceeded to the next activity in our process:
              creating UI moodboards. The mood boards served as visual
              inspiration and as a reference point for the overall look and feel
              our app. Each one of us created his own moodboard and shared it
              with the others for feedback.
            </p>
            <h2>Question</h2>
            <p>
              How can valuable gained insights be presented to the end users?
            </p>
            <h2>Method</h2>
            <p onClick={openMoodboard} className="method">
              Mood Board
            </p>
            <h2>Why</h2>

            <p>
              UI moodboards were relevant to our project because they served as
              visual reference that helped us explore different design styles,
              colour palettes and visual elements. By creating them we were able
              to gather inspiration and establish a visual direction for our
              app. The UI moodboards were the visual guides which allowed us to
              effectively communicate and align our design ideas.
            </p>

            <h2>How</h2>

            <p>
              To create my moodboard I searched for inspirations at{" "}
              <span className="method" onClick={openDribble}>
                Dribbble.com.
              </span>{" "}
              I was looking for examples with darker background colour and
              brighter colours on visual elements. My idea was to gather ideas
              with modern and fresh looks. I found an interesting smart watch
              interface design example that captured my attention, because it
              conveyed what I was looking for. I put all the parts together in
              order to create my moodboard.
            </p>
            <h2>Results</h2>
            <p>
              You can see the result on the right side where my moodboard is
              showed.
            </p>

            <h2>Conclusion</h2>
            <p>
              The moodboard gave me a significant idea of ​​what our interface
              could look like with certain bright colors and a dark background.
              Subsequently in later stages when my colleagues and I were
              choosing the color palette for our design system, they also voted
              for a palette of similar colors. The moodboard also influenced my
              sketches below.
            </p>
          </div>

          <div className="container-image">
            <img src={myMoodboardImg} alt="#" />
          </div>
        </div>
      </div>

      <div className="ideate-page-sketches" ref={sketchesRef}>
        <h1>Sketches</h1>
        <div className="wrapper">
          <div className="container-image">
            <img src={sketchesImg} alt="#" />

            <iframe
              title="sketches"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FjZBTUwAIRh7vWpjY6KoHGW%2FUI-Sketches%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DESgZBNPS4b9J4XI3-1"
            ></iframe>
          </div>
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              After we finalized our concept the next important step was to use
              the MosCow method to streamline and pinpoint the essential
              features of our app. This helped us to to identify the must-have,
              should-have, could-have, and won't-have features of our
              application. I played a crucial role here as it can be seen in the
              embedded FigJam file because the inputs I provided in the fields
              ultimately influenced features of our app.
            </p>
            <h2>Question</h2>
            <p>
              {" "}
              How can valuable gained insights be presented to the end users?
            </p>
            <h2>Method</h2>
            <p onClick={openSketching} className="method">
              Sketching
            </p>
            <h2>Why</h2>

            <p>
              The MoSCoW method helped us prioritize the features and
              requirements based on their importance. By using this method we
              identified the must-have features that are most important for
              providing insights into high sound levels, such as real-time
              alerts and safe space suggestions. It allowed us to focus on
              delivering the most important functionalities first by ensuring
              that we will effectively address the primary needs of our target
              users.
            </p>

            <h2>How</h2>

            <p>
              This was a group activity and each team member contributed with
              this own ideas by placing sticky notes in the categorized columns.
              I added my ideas to the MosCow table. After that we discussed our
              ideas and we collectively created our final MosCow prioritization.
            </p>
            <h2>Results</h2>
            <p>
              The results from the MosCow prioritization showcased that our app
              will prioritize on having simple and easy to read interface,
              real-time decibel measurement feature, customisable threshold
              feature. Additional features like safe space suggestions and peak
              noise alerts. Showcasing complex visuals and detailed graphs of
              data won’t be a priority.
            </p>

            <h2>Conclusion</h2>
            <p>
              The results we gained via the MosCow method provided us with
              valuable clarity on the required screens for our app and enabled
              us to refine the user flows and subsequently create a cohesive and
              intuitive user experience.
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

export default IdeatePage;
