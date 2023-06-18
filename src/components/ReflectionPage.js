import React from "react";
import PageIntroduction from "./PageIntroduction";
import PrevNext from "./PrevNext";
import reflectionImage from "../assets/reflection.png";

const ReflectionPage = () => {
  const navigateToGibsMethod = () => {
    window.open(
      "https://www.mindtools.com/ano9qiu/gibbs-reflective-cycle",
      "_blank"
    );
  };
  return (
    <div className="reflection-page">
      <PageIntroduction
        pageName="reflection"
        pageIntroText=" Welcome to the Reflection page. In this page you will
        find my personal reflection about the group project. The reflection written below justify learning outcome 6. Keep scrolling down and
        enjoy reading my reflection!"
        learningOutcome="Learning outcome 6: Personal leadership"
      />

      <div className="reflection-page-reflection">
        <h1>Reflection</h1>
        <div className="wrapper">
          <div className="container-image">
            <img src={reflectionImage} alt="#" />
          </div>
          <div className="container-text">
            <h3>
              Method used:{" "}
              <span onClick={navigateToGibsMethod}>
                Gibbs' Reflective Cycle
              </span>
            </h3>
            <p>
              In 2023 a new law in The Netherlands states that students at
              primary school need to have a least 2 hours of physical education
              each week. As a result physical exercise teachers have to be in
              the gym hall for a lot more. Physical exercise teachers already
              had a lot of problems related to tinnitus, hearing loss and other
              problems for being in a gym hall for too long. Due to this problem
              we received the following design challenge: How can physical
              exercise teachers in primary school get more insight into the
              sound levels and stress during the class?
            </p>
            <p>
              My group consisted of people with diverse skillsets and knowledge.
              We had UI/UX designers, UX researchers & front-end developers. The
              project lasted for 12 weeks from March 14 to June 14. We used the
              design thinking process in our 2-week design sprints and used CMD
              research methods for user research.
            </p>

            <p>
              At the very beginning of the project I felt a bit insecure and
              confused however as we were progressing gradually I knew that we
              are on the right track. A big problem for me was that some team
              members were late for our scheduled working moments. It was a
              problem because for me that showed a bit of unprofessionalism.
              Nevertheless our overall group dynamic was nice and we never had
              conflicts between us.
            </p>

            <p>
              The most important outcome of this product for me was to
              understand whether PE teachers can comprehend information about
              high sound levels in the gym halls and their impact on their
              hearing. Together with my group I tried to validate this by
              testing our proof of concept interactive prototype to understand
              whether visual cues displayed in our app make the user aware of
              the impact of high sound levels on their hearing.
            </p>
            <p>
              For this project I contributed in various ways. From the initial
              project setup till the last phase of testing I was an active team
              members who always tried to push the team to achieve the best. My
              role as POC (Point of contact) played an important role. I was the
              person from the group who was mostly involved within the process
              of the project. I attended every stand up we had together with our
              stakeholder and the other groups which were part of the project.
              As a result my colleagues were always up-to-date with the overall
              project progress and stakeholder expectations.
            </p>

            <p>
              However it's important for me to mention that there were external
              factors that affected the results I achieved personally and we
              achieved as a group. One example for this is the lack of people
              that I could interview. At certain moments I felt things were not
              that organised between our stakeholder and our client Sorama. They
              had difficulties finding people even for the focus groups they
              conducted. Same applies for the usability testing. If I was given
              the option to contact a lot of teachers for getting valuable
              feedback on the work I did then I would have done even better
              testing of the product I worked on.
            </p>

            <p>
              Next but not final I can share that by working on this project I
              was able to significantly improve my understanding of the design
              thinking methodology. With the experience gained I now truly
              consider myself a better designer and UX researcher.
            </p>
            <p>
              Finally some of the goals I have set up for my further development
              are: Improving my time management skills , enhancing my
              communication and collaboration skills as well as deepening my
              understanding of UX research methods.
            </p>
          </div>
        </div>
      </div>

      <PrevNext
        // nextLink="/group-project/recommendations"
        previousLink="/group-project/peer-review"
        previousText="Peer review"
        // nextText="Project Recommendations"
      />
    </div>
  );
};

export default ReflectionPage;
