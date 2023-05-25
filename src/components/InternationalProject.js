import React, { useEffect, useState } from "react";
import "../App.scss";
import internationalGroupImage from "../assets/grouppic.jpeg";
import designThinkingImage from "../assets/designthinking.png";
import lotiLogo from "../assets/loti-logo.png";
import projectPlanImage from "../assets/reflection.png";
import brainstormImage from "../assets/pic.jpeg";
import { AiOutlineCheck } from "react-icons/ai";
import containerOneImage from "../assets/container1.jpeg";
import containerTwoImage from "../assets/container2.jpeg";
import containerThreeImage from "../assets/container3.jpeg";
import containerFourImage from "../assets/container4.jpeg";
import moodboardImage from "../assets/moodboard.png";
import lotiOne from "../assets/loti-app1.png";
import lotiTwo from "../assets/loti-app2.png";
import lotiThree from "../assets/loti-app3.png";
import lotiFour from "../assets/loti-app4.png";
import lotiFive from "../assets/loti-app5.png";
import lotiSix from "../assets/loti-app6.png";
import lotiSeven from "../assets/loti-app7.png";
import lotiEight from "../assets/loti-app8.png";
import lotiNine from "../assets/loti-app9.png";
import lotiTen from "../assets/loti-app10.png";
import userStoryOne from "../assets/userStory1.png";
import userStoryTwo from "../assets/userStory2.png";
import userStoryThree from "../assets/userStory3.png";
import interViewQuestions from "../assets/InterviewQuestions.png";

const InternationalProject = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    console.log("from useEffect");
    const handleScroll = () => {
      const processSection = document.querySelector(".project-process");
      const reflectionSection = document.querySelector(".project-reflection");

      if (
        window.scrollY >= processSection.offsetTop &&
        window.scrollY < reflectionSection.offsetTop
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigateToFigma = () => {
    window.open(
      "https://www.figma.com/file/dsosRtHiJOiKvVGq8b2YZJ/Woonbedrijf?type=design&node-id=0%3A1&t=lZoICC56wXlrcny5-1"
    );
  };

  return (
    <div className="international-project">
      <div className="international-project-hero">
        <div className="overlay"></div>
        <h1>International Project</h1>
      </div>

      <div className="project-intro">
        <div className="intro-img">
          <img src={internationalGroupImage} alt="#" />
        </div>
        <div className="intro-heading">
          <h1>Introduction</h1>
          <p>
            During my participation in an international project, I collaborated
            with students from diverse backgrounds and countries. Together, we
            faced a fascinating challenge that required us to develop an
            interactive solution. Our task involved creating a tool that would
            encourage students to share their unique perspectives on the core
            values of the LOT community—a community being developed by Vestide
            as part of the construction of 735 student apartments on the TU/e
            campus, set to be completed in July 2024. Our objective was to
            devise an innovative approach that would stimulate students to
            contribute their ideas and interpretations of the core values,
            fostering a sense of ownership and collaboration in shaping the
            future of the new student housing. As we worked on this project, we
            aimed to design a visually captivating and engaging tool that would
            be prominently displayed at the TUE campus, serving as a platform
            where students could express their thoughts in a manner that
            inspires and resonates with others.
          </p>
        </div>
      </div>

      <div className="project-contributions">
        <h1>My contributions</h1>
        <div className="contributions-wrapper">
          <div>
            <img src={projectPlanImage} alt="#" />
          </div>
          <div className="contributions-container">
            <h4>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Provided input for the concept
            </h4>
            <h4>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Came up with the name for the app
            </h4>
            <h4>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Participated in communication with stakeholder
            </h4>
            <h4>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Helped with creating student interview questions
            </h4>
            <h4>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Created avatar visuals in the mobile prototype
            </h4>
            <h4>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Created 50% of the mobile prototype
            </h4>

            <h4>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Conducted interview with student
            </h4>

            <h4>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Brainstormed potential solutions
            </h4>

            <h4>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Helped with documentation
            </h4>

            <h4>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Created posters
            </h4>
            <h4>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Created User Stories
            </h4>
          </div>
        </div>
      </div>

      <div className="project-summary">
        <h1>Summary</h1>

        <div className="project-summary-grid">
          <div className="summary-video">
            <iframe
              // width="100%"
              // height="500"
              src="https://www.youtube.com/embed/UQiRk9sg6_s"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></iframe>
          </div>

          <div className="summary-info">
            <img src={lotiLogo} alt="#" />
            <div className="problem-statement-container">
              <h2>Problem statement</h2>
              <p>
                {/* The project focuses on gaining insight from the students on
                campus on what they think about the core values of the LOT
                community, as well as including them in building this community
                through a series of experiences during the construction of the
                new apartment complex. The installation invites people to
                participate in person, mainly to share and discuss their ideas
                of the core values and anything else that builds the community.{" "} */}
                How might we create an interactive tool that gains insights from
                the students for LOT, and also raises awareness about the
                community?
              </p>
            </div>

            <div className="proposed-solution-container">
              <h3>Proposed solution</h3>
              <p>
                An event where the students come to the location and in the
                containers an AI avatar that interviews the people. There will
                be a couple of avatars to choose from based on different themes.{" "}
              </p>
              <h4>In person</h4>
              <p>
                <span></span>The users will go through the interactive survey
                with AR glasses on showcasing the Avatar interacting with them.
              </p>
              <h4>Online</h4>
              <p>
                <span></span>Online users are encouraged to visit the in person
                event.
              </p>
              <p>
                The users will be able to discuss answers and topics in person.
                At the end of the event, users will be presented with some
                options of how the containers can be repurposed into another
                kind of space that can be used by the community to come together
                in the meantime.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`sticky-header ${isSticky ? "sticky" : ""}`}>
        <div className="box">
          <div className="counter">1</div>
          <div>Emphatise</div>
        </div>
        <div className="box">
          <div className="counter">2</div>
          <div>Define</div>
        </div>
        <div className="box">
          <div className="counter">3</div>
          <div>Ideation</div>
        </div>
        <div className="box">
          <div className="counter">4</div>
          <div>Prototype</div>
        </div>
        <div className="box">
          <div className="counter">5</div>
          <div>Recommendations</div>
        </div>
        <div className="box">
          <div className="counter">6</div>
          <div>Reflection</div>
        </div>
      </div>

      <div className="project-process">
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
              In our project, we tried to utilize the design thinking
              methodology, a dynamic and iterative process, to address the
              challenge at hand. Design thinking is a non-linear, iterative
              process that teams use to understand users, challenge assumptions,
              redefine problems and create innovative solutions to prototype and
              test. There are 5 phases involved: Emphatize, Define, Ideate,
              Prototype and Test.
            </p>
          </div>
        </div>
      </div>

      <div className="project-emphatise">
        <h1>Emphatise</h1>
        <div className="container-text"></div>
        <div className="container-image">
          <img src={interViewQuestions} alt="#" />
        </div>
      </div>

      <div className="project-define">
        <h1>Define</h1>

        <div className="wrapper">
          <div className="container-text">
            <h4>What problem we are solving?</h4>
            <p>
              <span>(User)</span> needs to <span>(user’s need)</span> because
              <span> (insight)</span>.
            </p>
            <p>
              Residents of the campus need to be able to share opinions because
              it will shape the building and environment around it.
            </p>
            <h4>Problem statement</h4>
            <p>
              How might we create an interactive tool that gains insights from
              the students for LOT, and also raises awareness about the
              community?
            </p>
            <br />
            <h4>Sub-questions:</h4>
            <br />
            <p>
              1. How might we make the users want to take part in the
              experience?
            </p>

            <p>
              Answer: Making it interactive, personal, innovative, intriguing,
              promising a comfortable environment and also a reward
            </p>
            <br />
            <p>
              2. How might we make sure the users feel their opinions heard and
              understood?
            </p>
            <br />
            <p>
              Answer: By giving them a reaction & showing them their results
            </p>
            <br />
            <p>3. How might we create a nice designed tool?</p>
            <p>Answer: Using innovative solutions (AI, AR)</p>
            <br />
            <p>
              4. How might we make the tool personal and digital (virtual?) at
              the same time?
            </p>
            <p>
              Answer: By giving the user the option to customise their
              experience, by interacting with an AI avatar
            </p>
            <br />
            <p>
              5. How might we visualise the data we receive from the users, to
              provide feedback?
            </p>
            <p>
              Answer: With infographics of the overview of answers at the end of
              the interview, where their data and others’ data is combined
            </p>
            <br />
            <p>
              6. How might we introduce the core values in an interesting way?
            </p>
            <p>
              Answer: By having them explained by an AI avatar and forming
              questions around them
            </p>
            <br />
            <p>7. How can we protect user’s privacy?</p>
            <p>
              Answer: By having the answers stay anonymous, and only using the
              student ID to make sure only they have access to the tool
            </p>
            <br />
            {/* <div className="user-stories">
              <h2>User stories</h2>
              <div className="images">
                <img src={userStoryOne} alt="#" />
                <img src={userStoryTwo} alt="#" />
                <img src={userStoryThree} alt="#" />
              </div>
            </div> */}
          </div>
          <div className="container-image">
            {/* <img src={projectPlanImage} alt="#" className="brainstorm-img" /> */}
            <div className="user-stories">
              <h2>User stories</h2>
              <div className="images">
                <img src={userStoryOne} alt="#" />
                <img src={userStoryTwo} alt="#" />
                <img src={userStoryThree} alt="#" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="user-stories">
          <h2>User stories</h2>
          <div className="images">
            <img src={userStoryOne} alt="#" />
            <img src={userStoryTwo} alt="#" />
            <img src={userStoryThree} alt="#" />
          </div>
        </div> */}
      </div>

      <div className="project-ideation">
        <h1>Ideation</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              We brainstormed potentional solutions and we came up with the
              following ideas:
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Could be a room (in a container)
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Could be a game
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Having the users make decisions about questions using the
              environment, showing where they end up, and compare the end result
              with other people
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Creating personality groups and putting people in them based on
              their input
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Open-ended and yes-or-no questions
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Possibility for the users to create questions
            </p>
            <p>
              <span>
                <AiOutlineCheck size={20} color="#eb6f5c" />
              </span>
              Offline and online solution: works in person when the user is at
              the tool, and also from their phones
            </p>
          </div>
          <div className="container-image">
            <img src={brainstormImage} alt="#" className="brainstorm-img" />
          </div>
        </div>
      </div>

      <div className="project-prototype">
        <h1>Prototype</h1>

        <div className="moodboard-container">
          <div className="container-image">
            <img src={moodboardImage} alt="#" />
          </div>
          <div className="container-text">
            <h2>Moodboard</h2>
            <p>
              Before stepping into prototyping the mobile app itself we created
              a moodboard seen on the left side. This moodboard contains some
              inspirational designs that we implemented into the prototype. I
              created all of the avatar visuals using an AI tool. Beside that I
              also designed the main poster and the secondary poster that might
              be put on location to attract the attention of the passing
              students.Overall, the moodboard was an invaluable tool that not
              only inspired us but also guided our creative decisions as we
              progressed towards developing an interactive solution. It provided
              a tangible and visually captivating foundation for our prototyping
              efforts, helping us stay focused on the intended user experience
              while incorporating the AI-generated avatar visuals as an
              innovative element within the design.
            </p>
          </div>
        </div>

        <div className="containers-container">
          <h2>3D containers</h2>
          <div className="images">
            <img src={containerOneImage} alt="#" />
            <img src={containerTwoImage} alt="#" />
            <img src={containerThreeImage} alt="#" />
            <img src={containerFourImage} alt="#" />
          </div>
        </div>

        <div className="container-prototype">
          <h2> Mobile Prototype</h2>
          <div className="images">
            <img src={lotiOne} alt="#" />
            <img src={lotiTwo} alt="#" />
            <img src={lotiThree} alt="#" />
            <img src={lotiFour} alt="#" />
            <img src={lotiFive} alt="#" />
            <img src={lotiSix} alt="#" />
            <img src={lotiSeven} alt="#" />
            <img src={lotiEight} alt="#" />
            <img src={lotiNine} alt="#" />
            <img src={lotiTen} alt="#" />
          </div>

          <div className="container-description">
            <p>
              {" "}
              These are the screens we presented to the stakeholder in the demo
              video. There are a lot more screens in the figma file. If you want
              to check them click on the button below.
            </p>
            <button onClick={navigateToFigma}>View full prototype</button>
          </div>
        </div>
      </div>

      <div className="project-recommendations">
        <h1>Recommendations</h1>
        <div className="wrapper">
          <div className="recommendations-img">
            <img src={projectPlanImage} alt="#" />
          </div>
          <div className="recommendations-text">
            <p>
              As a group, we aimed to deliver a concept that can be taken over
              and implemented in the real world by the stakeholder. We believe
              the concept has great potential to attract student attention and
              help with building up the community of LOT.{" "}
            </p>

            <p>Here are some further recommendations:</p>
            <p>
              <span>
                {" "}
                <AiOutlineCheck size={25} color="#eb6f5c" />
              </span>
              Move the containers to a more accessible place, such as close to
              the TU/e build or existing student houses.
            </p>

            <p>
              <span>
                {" "}
                <AiOutlineCheck size={25} color="#eb6f5c" />
              </span>
              Set up QR-Codes around campus to register for the offline version
              or get access to the online version.
            </p>
            <p>
              <span>
                {" "}
                <AiOutlineCheck size={25} color="#eb6f5c" />
              </span>
              Long-term Engagement: the online platform or community forum where
              students can continue to contribute their ideas and engage in
              discussions beyond the initial event. The platform can serve as a
              hub for ongoing community-building efforts, and make
              announcements, where students can propose initiatives, share
              resources, and collaborate with one another.
            </p>
            <p>
              <span>
                {" "}
                <AiOutlineCheck size={25} color="#eb6f5c" />
              </span>
              Gamification Elements: Incorporating gamification elements into
              the experience to increase interactivity and motivation. For
              example, introducing a point system or rewards for active
              participation, such as earning badges or unlocking virtual
              achievements which translates to physical rewards. This can
              further incentivize students to engage and stay involved.
            </p>
            <p>
              <span>
                {" "}
                <AiOutlineCheck size={25} color="#eb6f5c" />
              </span>
              Co-creation Opportunities: Providing opportunities for students to
              contribute to the physical space of the apartment complex
              actively. For instance, you could organize workshops or design
              competitions where students can submit ideas for communal areas,
              artwork, or other elements that reflect the community's values.
              This fosters a sense of ownership and pride among the students.
            </p>
            <p>
              <span>
                {" "}
                <AiOutlineCheck size={25} color="#eb6f5c" />
              </span>
              Alumni Engagement: Extend the involvement beyond current students
              by inviting alumni to participate and share their insights. Alumni
              can provide valuable perspectives and experiences, and their
              engagement can help bridge the gap between current and past
              community members.
            </p>
            <p>
              <span>
                {" "}
                <AiOutlineCheck size={25} color="#eb6f5c" />
              </span>
              Regular Feedback Channels: Establish a system for collecting
              ongoing feedback from students about their experiences in the
              community. This could be through periodic surveys, suggestion
              boxes, or digital feedback forms. Regularly reviewing and acting
              upon this feedback demonstrates a commitment to continuous
              improvement and ensures the community remains responsive to
              evolving needs.
            </p>
            <p>
              <span>
                {" "}
                <AiOutlineCheck size={25} color="#eb6f5c" />
              </span>
              Collaborations with Campus Organizations: Forge partnerships with
              various campus organizations, clubs, or academic departments to
              create synergies and foster cross-disciplinary collaboration. This
              can lead to joint initiatives, shared resources, and a more
              integrated community experience.
            </p>
            <p>
              <span>
                {" "}
                <AiOutlineCheck size={25} color="#eb6f5c" />
              </span>
              Expansion to Online Platforms: In addition to the physical
              installation, explore ways to extend the experience to online
              platforms, such as virtual reality (VR) or interactive web
              portals. This allows for broader accessibility, remote
              participation, and the inclusion of off-campus students or alumni.
            </p>
          </div>
        </div>
      </div>

      <div className="project-reflection">
        <h1>Reflection</h1>
        <div className="wrapper">
          <div className="reflection-text">
            <p>
              During this project I was faced with the opportunity to work with
              colleagues of different nationalities and skills. The project gave
              me the opportunity to think bigger and in perspective. I was able
              to provide products to support my learning goals. Every prototype
              I create improves my prototyping skills, so working with my
              colleague Wolf on the mobile prototype really helped me achieve
              that. Also, this project helped me work on my soft skills such as
              communication and leadership. From the beginning of the project to
              the end, I tried to be proactive and help my other colleagues to
              open up and share their ideas. The little time we had for work, on
              the other hand, helped me develop a valuable skill, which is being
              able to handle difficult tasks in a relatively short time. I think
              this is a very important skill for the workplace I will be in the
              coming years. Overall, this project was a good experience and I'm
              glad I had the opportunity to be a part of it.
            </p>
          </div>
          <div className="reflection-img">
            <img src={projectPlanImage} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalProject;
