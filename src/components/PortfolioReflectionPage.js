import React from "react";
import "../App.scss";
// import PrevNext from "./PrevNext";
import PageIntroduction from "./PageIntroduction";
import reflectionImg from "../assets/reflection.png";

const PortfilioReflectionPage = () => {
  return (
    <div className="reflection-page">
      <PageIntroduction
        pageName="reflection"
        pageIntroText=" Welcome to the reflection page of my individual project. The
        reflection I wrote here justifies learning outcome 6. Keep scrolling down and
        enjoy reading!"
        learningOutcome="Learning outcome 6: Personal leadership"
      />
      <div className="reflection-page-reflection">
        <h1>Reflection</h1>
        <div className="wrapper">
          <div className="container-image">
            <img src={reflectionImg} alt="#" />
          </div>
          <div className="container-text">
            <p>
              During the development of my portfolio website, I had regular
              communication with my semester coach, which proved to be very
              beneficial. I was able to receive valuable feedback on my work,
              which helped me to refine my research questions and take into
              consideration the available time. It was an excellent opportunity
              for me to learn from an experienced professional and make the
              necessary adjustments to ensure the project's success. For the
              first time I conducted usability testing with a nice tool called
              Useberry and I was able to get important user feedback. Overall
              this project helped me to lay down the foundations of my portfolio
              and given the short of time we had I think I did a good job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfilioReflectionPage;
