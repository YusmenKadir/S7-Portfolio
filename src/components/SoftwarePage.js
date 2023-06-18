import React, { useEffect, useRef } from "react";
import "../App.scss";
import PageIntroduction from "./PageIntroduction";
import PrevNext from "./PrevNext";
import c1Image from "../assets/MyyC1.png";
import c2Image from "../assets/MyC2.png";
import c3ImageGroup from "../assets/MYc3.png";
import c3ImageSolo from "../assets/MYC3-SOLO (2).png";
import fromLuukImg from "../assets/fromLuuk.png";
import { useLocation } from "react-router";

const SoftwarePage = () => {
  const location = useLocation();
  const contextDiagramRef = useRef(null);
  const containerDiagramRef = useRef(null);
  const individualComponentDiagramRef = useRef(null);
  const groupComponentDiagramRef = useRef(null);
  const softwareLibrariesRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#system-context" && contextDiagramRef.current) {
      contextDiagramRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#container-diagram" && containerDiagramRef.current) {
      containerDiagramRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (
      location.hash === "#individual-component-diagram" &&
      individualComponentDiagramRef.current
    ) {
      individualComponentDiagramRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (
      location.hash === "#group-component-diagram" &&
      groupComponentDiagramRef.current
    ) {
      groupComponentDiagramRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (
      location.hash === "#software-libraries" &&
      softwareLibrariesRef.current
    ) {
      softwareLibrariesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const openLiteratureStudy = () => {
    window.open(
      "https://cmdmethods.nl/cards/library/literature-study",
      "_blank"
    );
  };

  const openGoogle = () => {
    window.open("https://www.google.com", "_blank");
  };

  const openRestSharp = () => {
    window.open("https://restsharp.dev/", "_blank");
  };

  const openQuartz = () => {
    window.open("https://www.quartz-scheduler.net/", "_blank");
  };

  const openSerilog = () => {
    window.open("https://serilog.net/", "_blank");
  };

  return (
    <div className="software-page">
      <PageIntroduction
        pageName="software"
        pageIntroText=" Welcome to the Sofware design products page. In this page you will find
        all products that I developed in association to the software design learning outcome.
        You will find System context diagram (C1), Container diagram (C2) and Component diagram (C3).
        All diagrams that I made were approved from the software students from the other teams who were part our project.
         Keep scrolling down and
        enjoy reading!"
        learningOutcome="Learning outcome 3: Software design"
        outcomeExplanation="You design and evaluate a software system with existing components or libraries using predetermined quality criteria. "
      />

      <div className="software-page-intro">
        <h1>How I tackled the task and helped my colleagues</h1>
        <div className="wrapper">
          <div className="container-text">
            <p>
              Thanks to my role as a point of contact person representing our
              group every Wednesday on project stand up meetings I was the
              person who was mostly involved within the process of the project.
              This helped me get informed about the decisions of other teams who
              were working on different parts of the project namely the software
              and infrastructure parts. From the student working on the software
              part from the software team I received a graphical representation
              of his idea on designing the back-end architecture of the project.
            </p>
            <p>
              His plan was to use a microservices architecture. In a
              microservices architecture, an API gateway serves as a central
              entry point for the client applications to interact with the
              various microservices within the system. It acts as a reverse
              proxy that receives requests from clients and forwards them to the
              appropriate microservices. His idea was to have Processing
              service, Data service and Report service. The purpose of the data
              service is to handle interactions with the database for reading
              and writing data. The purpose of the processing controller is to
              coordinate and execute data processing tasks. The purpose of the
              report service is to generate meaningful and visually appealing
              reports based on processed data. We knew also from the
              infrastructure team that the type of database they have chosen is
              cloud database - Azure Cloud.
            </p>

            <p className="importance">
              It's important to mention that except this graphic received from
              the student working on the software part, no further information
              was shared about the inner structure of each microservice as
              simply no valuable progress was made there. The advice I received
              from the software team was to design up to level 2 (C2) and that
              we could design up to level 3 (C3) by making assumptions and we if
              we estimate that it brings value then we could showcase it.
            </p>

            <p>
              With this knowledge and thanks to my 3 years professional
              experience as a web developer later on I took the initiative and
              made a plan with my colleagues Wolfgang and Prakasa about how to
              create our group C3 model.
            </p>

            <p>
              We worked individually on C1, C2 and C3 diagrams. However for the
              C3 diagram we split the work by having each member working on the
              potential inner structure of a microservice. At the end we merged
              our C3 diagrams into one group C3 diagram!
            </p>
          </div>
          <div className="container-image">
            <img src={fromLuukImg} alt="#" />
          </div>
        </div>
      </div>

      <div className="software-page-c1" ref={contextDiagramRef}>
        <h1>System Context diagram C1</h1>
        <div className="wrapper">
          <div className="container-image">
            <img src={c1Image} alt="#" />
          </div>
          <div className="container-text">
            <p>
              First I created the System Context diagram. This is the starting
              point for documenting a software system. This way you can see the
              big picture of the project. At the top of the diagram is the PE
              teacher, who is the primary user of the system. Below that we have
              the main system, this is the Noise control project. The purpose of
              this system is to allow the PE teacher monitor and manage noise
              levels during classes.
            </p>

            <p>
              After showing this diagram to the software team I got green light
              to continue with the next diagram.
            </p>
          </div>
        </div>
      </div>
      <div className="software-page-c2" ref={containerDiagramRef}>
        <h1>Container diagram C2</h1>
        <div className="wrapper">
          <div className="container-image">
            <img src={c2Image} alt="#" />
          </div>
          <div className="container-text">
            <p>
              Once I understood how the system fits in to the overall IT
              environment the next I did was to zoom-in to the system boundary
              with a Container diagram. The Container diagram shows the
              high-level shape of the software architecture and how
              responsibilities are distributed across it. It also shows the
              major technology choices and how the containers communicate with
              one another.
            </p>

            <p>
              In this diagram you can see the important parts of the system.
              First off you have the the Wear OS App and the Android Mobile App.
              These are the client side applications the PE teacher uses. Then
              you have the API Application which provides the noise control
              functionality to the client applications. The client applications
              communicate with the API Application via RESTful APIs. The API
              Application reads from and writes the data received from the
              client application to the cloud database which stores all system
              related data.
            </p>

            <p>
              It was communicated to me that the technology choice from the
              software team for the Wear OS App and the Android Mobile App is
              Java. Whereas for the API Application is .NET Core
            </p>

            <p>
              {" "}
              After showing this diagram to the software team I got green light
              to continue with the next diagram.
            </p>
          </div>
        </div>
      </div>
      <div
        className="software-page-c3first"
        ref={individualComponentDiagramRef}
      >
        <h1>Individual Component diagram C3</h1>
        <div className="wrapper">
          <div className="container-image">
            <img src={c3ImageSolo} alt="#" />
          </div>
          <div className="container-text">
            <p>
              As mentioned earlier above for making the Component diagram (C3) I
              proposed my colleagues to split the work by having each member
              take one of controllers and think further about what type of
              components it may utilize. Each of us needed to make assumptions
              as per the explanation I provided in the upper sections.
            </p>
            <p>
              I personally had to work on the Process Controller. Wolfgang took
              the Data Controller and Prakasa took the Report Controller.
            </p>
            <p>
              The illustration above showcases my personal Component diagram
              (C3). This diagram is visual representation that illustrates the
              organization and dependencies of the software components within
              the system. It showcases the high-level structure of the system,
              by highlighting the components and their interactions and by
              providing a clear view of how the system is composed and how the
              components work together to achieve the system's functionality.
            </p>
            <p>
              Now let's see what each of the controllers does. The Process
              Controller orchestrates and manages system processes and
              workflows. The Report Controller is responsible for the generation
              and delivery of reports based on system data. They both
              communicate with the Data Controller which interacts with the
              database where all of the system data is stored.
            </p>
            <p>
              Now how did I come up with the components the Process Controller
              might use? The answer lies in the client applications and
              specifically the screens they have. We know that the Wear OS App
              and the Android Mobile App have Dashboard screen, Threshold
              reached alerting screen, Dosimeter screen and Settings screen. The
              Dashboard screen measures real-time noise levels. Alerting screen
              shows up when threshold levels are exceeded. Dosimeter screen
              shows information about the doses received as dB values.
            </p>
            <p>
              Based on those screens I came up with the following components
              that the Process Controller might leverage:
            </p>

            <p>
              <span>Sensor Manager: </span> A component which collects real-time
              noise level measurements
            </p>
            <p>
              <span>Notification Manager: </span> A component which handles the
              generation and delivery of notifications
            </p>
            <p>
              <span>Threshold Checker: </span> A component which triggers alerts
              based on noise levels that exceed the configured threshold level
              in the client applications
            </p>
            <p>
              <span>Dosimeter Calculator: </span> A component which calculates
              accumulated noise doses
            </p>
            <p>
              <span>Connection Manager: </span> A component which provides
              integration and communication between the system and potential
              external systems
            </p>

            <p>
              All the components used by the Process Controller are important
              for managing the interactions with the client-side applications.
              The Sensor Manager provides real-time noise level measurements to
              the Dashboard screen, while the Threshold Checker ensures that
              threshold exceeded alerts are triggered on the threshold reached
              alerting screen. The Dosimeter Calculator calculates accumulated
              noise doses, which are then displayed on the Dosimeter screen. The
              Notification Manager handles the generation and delivery of
              notifications to the user.
            </p>
            <p>
              By using these components the Process Controller may effectively
              manage the flow of data and actions between the noise control
              system and the client-side applications, enhancing the overall
              user experience.
            </p>
          </div>
        </div>
      </div>

      <div className="software-page-c3second" ref={groupComponentDiagramRef}>
        <h1>Group Component diagram C3</h1>
        <div className="wrapper">
          <div className="container-image">
            <img src={c3ImageGroup} alt="#" />
          </div>
          <div className="container-text">
            <p>
              And finally there is our group Component diagram (C3). Here we can
              see that beneath the Data Controller and the Report Controller
              there are some additional components which my colleagues Wolfgang
              and Prakasa came up with. We also see 2 additional external
              systems in gray colour. Now let me explain about those.
            </p>

            <p>
              We can see that the Data Controller which my colleague Wolfgang
              took now uses a component called:
            </p>

            <p>
              <span> Database Access Layer: </span> A component which handles
              interactions with the database for reading and writing the system
              data.
            </p>

            <p>
              The Process Controller which Prakasa took uses three components:
            </p>
            <p>
              <span>Data Aggregator: </span> A component which processes
              collected noise level data and generatess stastical insights
            </p>
            <p>
              <span>Chart Generator: </span> A component which generates visual
              charts and graphs
            </p>
            <p>
              <span>Report Exporter: </span> A component which allows exporting
              of generated reports and metrics
            </p>

            <p>
              We also have provided two future recommendations for external
              systems which interact with the noise control software system.
            </p>

            <p>
              <span>Frequency-Cancelling Earbuds: </span>
              These specialised earbuds will employ advanced technology to
              actively cancel or attenuate specific frequencies of ambient
              noise.
            </p>
            <p>
              <span>Sorama Sound Mapping Device API: </span>
              The API of this device will facilitate the acquisition of valuable
              sound information, enabling the system to make data-driven
              decisions and guide teachers to quieter areas.
            </p>

            <p>
              After helping my colleagues with the C3 diagram I stepped into
              conducting further research on potential libraries the software
              system might use. Scroll down to learn more about that!
            </p>
          </div>
        </div>
      </div>

      <div className="software-page-research" ref={softwareLibrariesRef}>
        <h1>Software libraries research</h1>

        <div className="wrapper">
          <div className="research-box-1">
            <h2>Introduction</h2>
            <p>
              Future developers of the system might recognize the critical role
              of good communication between our software system and external
              APIs. To enhance this interaction I conducted research to identify
              the best .NET Core libraries for making HTTP requests. By
              exploring different options I aimed to select a library that will
              simplify the implementation of HTTP requests and will handle
              response processing as well as improve the overall system
              performance.
            </p>
            <h2>Question</h2>
            <p>
              What are the best .NET Core libraries for making HTTP requests in
              .NET Core applications?
            </p>
            <h2>Research Method</h2>
            <p className="research-method" onClick={openLiteratureStudy}>
              Literature Study
            </p>
            <h2>Why</h2>
            <p>Find contextual information, guidance and best practices.</p>
            <h2>How</h2>
            <p>
              I made a search plan where I identified relevant keywords in order
              to find my resources
            </p>
            <h2>Search keywords</h2>
            <span className="chip">HTTP request libraries .NET Core</span>
            <span className="chip">.NET Core libraries for HTTP requests</span>
            <h2>Search engine</h2>
            <p className="search-engine" onClick={openGoogle}>
              Google
            </p>
            <h2>Results</h2>
            <p>
              RestSharp is probably the most popular HTTP client library for
              .NET. Featuring automatic serialization and deserialization,
              request and response type detection, variety of authentications
              and other useful features, it is being used by hundreds of
              thousands of projects.{" "}
              <span className="read-more-btn" onClick={openRestSharp}>
                Read more
              </span>
            </p>
            <h2>Conclusion</h2>
            <p>
              After performing the research on the best .NET Core libraries for
              making HTTP requests, I determined that RestSharp is the optimal
              choice due to its intuitive API, comprehensive HTTP functionality,
              and widespread adoption in the developer community.
            </p>
            <h2>Research sources</h2>
            <p>
              {" "}
              RestSharp. (n.d.). Official website, from https://restsharp.dev/
            </p>
          </div>
          <div className="research-box-2">
            <h2>Introduction</h2>
            <p>
              As a developer I know logging would be an important aspect of
              developing and maintaning a resilient software system. To empower
              the future development team with effective diagnostic tools, I
              conducted research to identify the best diagnostic logging
              libraries for .NET Core applications. My goal was to find a
              library that will provide comprehensive logging features to
              facilitate real-time debugging.
            </p>
            <h2>Question</h2>
            <p>
              What are the best diagnostic logging libraries for .NET Core
              applications?
            </p>
            <h2>Research Method</h2>
            <p className="research-method" onClick={openLiteratureStudy}>
              Literature Study
            </p>
            <h2>Why</h2>
            <p>Find contextual information, guidance and best practices.</p>
            <h2>How</h2>
            <p>
              I made a search plan where I identified relevant keywords in order
              to find my resources
            </p>
            <h2>Search keywords</h2>
            <span className="chip">
              diagnostic logging libraries for .NET Core
            </span>
            <span className="chip">.NET Core job debugging libraries</span>
            <h2>Search engine</h2>
            <p className="search-engine" onClick={openGoogle}>
              Google
            </p>
            <h2>Results</h2>
            <p>
              Serilog is a powerful diagnostic logging library for .NET Core
              applications that simplifies logging configuration, offers
              versatile logging sinks, and enables structured logging for
              enhanced troubleshooting and analysis.{" "}
              <span className="read-more-btn" onClick={openSerilog}>
                Read more
              </span>
            </p>
            <h2>Conclusion</h2>
            <p>
              After conducting the research on diagnostic logging libraries, I
              found that Serilog stands out as an excellent option for .NET Core
              applications. This conclusion was reached based on its flexible
              configuration, robust logging sinks, and support for structured
              logging.
            </p>
            <h2>Research sources</h2>
            <p>Serilog. (n.d.). Official website, from https://serilog.net/</p>
          </div>
          <div className="research-box-3">
            <h2>Introduction</h2>
            <p>
              In back-end development job scheduling plays an important role as
              it enables developers to automate routine tasks, streamline
              workflows and optimize resources. As I knew this from personal
              experience I wanted to find the optimal library that would help
              future developers of the system achieve these.
            </p>
            <h2>Question</h2>
            <p>
              What are the best job scheduling libraries for .NET core
              applications?
            </p>
            <h2>Research Method</h2>
            <p className="research-method" onClick={openLiteratureStudy}>
              Literature Study
            </p>
            <h2>Why</h2>
            <p>Find contextual information, guidance and best practices.</p>
            <h2>How</h2>
            <p>
              I made a search plan where I identified relevant keywords in order
              to find my resources
            </p>
            <h2>Search keywords</h2>
            <span className="chip">job scheduling libraries for .NET Core</span>
            <span className="chip">.NET Core job scheduling</span>
            <h2>Search engine</h2>
            <p className="search-engine" onClick={openGoogle}>
              Google
            </p>
            <h2>Results</h2>
            <p>
              Quartz.NET is a full-featured, open source job scheduling system
              that can be used from smallest apps to large scale enterprise
              systems.{" "}
              <span className="read-more-btn" onClick={openQuartz}>
                Read more
              </span>
            </p>
            <h2>Conclusion</h2>
            <p>
              Here I can conclude that Quartz.NET is a potential good choice.
              This was based on its powerful , advanced job configuration
              options, and seamless integration capabilities.{" "}
            </p>
            <h2>Research sources</h2>
            <p>
              Quartz.NET. (n.d.). Official website, from
              https://www.quartz-scheduler.net/
            </p>
          </div>
        </div>
      </div>

      <PrevNext
        nextLink="/group-project/stakeholder-appreciation"
        previousLink="/group-project/test"
        previousText="Test phase"
        nextText="Stakeholder appreciation"
      />
    </div>
  );
};

export default SoftwarePage;
