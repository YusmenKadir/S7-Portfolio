import React from "react";
import "../App.scss";
import PageIntroduction from "./PageIntroduction";

import { IoMdOpen } from "react-icons/io";
import prototypeProcessDoc from "../documents/Prototyping_Process.pdf";

import PrevNext from "./PrevNext";
const PrototypePage = () => {
  const openPrototyping = () => {
    window.open("https://cmdmethods.nl/cards/workshop/prototyping", "_blank");
  };

  const openProcessDoc = () => {
    window.open(prototypeProcessDoc, "_blank");
  };

  return (
    <div className="prototype-page">
      <PageIntroduction
        pageName="prototype"
        pageIntroText=" Welcome to the Prototype phase products page. In this page you will
         all  products created during this phase. The
        products showcased justify learning outcome 2. Keep scrolling down and
        enjoy reading!"
        learningOutcome2="Learning outcome 2: User interaction (execution & validation) "
      />

      <div className="prototype-page-prototype">
        <h1>Prototype</h1>

        <div className="wrapper">
          <div className="container-image">
            <iframe
              title="prototype"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F3V4eXh2bzAd27vqHRdaups%2FWatch-Prototype-V2%3Ftype%3Ddesign%26node-id%3D273%253A11734%26t%3DYRLsMBOvO1QbQhHL-1"
            ></iframe>
          </div>
          <div className="container-text">
            <h2> Introduction</h2>
            <p>
              After unlocking our creativity in the ideation phase, it was time
              to step into bringing our vision into live. This section describes
              my contribution during the prototyping phase.
            </p>
            <h2>Question</h2>
            <p>
              What medium is best to present the visual solutions for the end
              users?
            </p>
            <p>How can valuable insights be presented to the end users?</p>
            <h2>Method</h2>
            <p onClick={openPrototyping} className="method">
              Prototyping
            </p>
            <h2>Why</h2>

            <p>
              Prototyping was an essential phase in our design process because
              it allowed us to transform our abstract ideas and concepts into
              tangible and interactive representations.
            </p>

            <h2>How</h2>

            <p>
              I designed the whole Settings section of our app by using tools
              like Whimsical and Figma. I drew inspirations and followed design
              guidelines specific to Wear OS. As I progressed I incorporated
              feedback from stakeholder. More about my process can be read in
              the “Prototyping process” document below.
            </p>
            <h2>Results</h2>
            <p>
              Final design of the Settings section can be seen on the left side.
            </p>

            <h2>Conclusion</h2>
            <p>
              With the prototype ready the next step was to conduct usability
              testing.
            </p>

            <h2>Related documents</h2>
            <div className="docs-wrapper" onClick={openProcessDoc}>
              <div className="doc">
                <div className="text">Protyping Process</div>
                <div className="icon">
                  <IoMdOpen size={25} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PrevNext
        nextLink="/group-project/test"
        previousLink="/group-project/ideate"
        previousText="Ideate phase"
        nextText="Test phase"
      />
    </div>
  );
};

export default PrototypePage;
