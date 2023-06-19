import React from "react";
import "../App.scss";
import researchQuestionsImage from "../assets/researchQuestionsImg.png";
import PageIntroduction from "./PageIntroduction";
import ResearchPhaseDoc from "../documents/Research-phase.pdf";

const PortfilioResearchPage = () => {
  const openDoc = () => {
    window.open(ResearchPhaseDoc, "_blank");
  };

  const openLiteratureStudy = () => {
    window.open(
      "https://cmdmethods.nl/cards/library/literature-study",
      "_blank"
    );
  };

  const openGoogle = () => {
    window.open("https://www.google.com", "_blank");
  };
  return (
    <div className="portfolioresearch-page">
      <PageIntroduction
        pageName="portfolioresearch"
        pageIntroText=" Welcome to the research page of my individual project. In this page you will find 
        the answers of the research questions which I formulated in the project plan. 
        The products showcased justify learning outcomes 1 & 5. Keep scrolling down and
        enjoy reading!"
        learningOutcome="Learning outcome 1: User interaction (analysis & advice)"
        learningOutcome2="Learning outcome 5: Investigative problem solving"
      />

      <div className="portfolioresearch-page-questions">
        <h1>Research questions</h1>

        <div className="wrapper">
          <div className="container-image">
            <img src={researchQuestionsImage} alt="#" />
          </div>
          <div className="container-text">
            <ol>
              <li>
                How can I design a portfolio website that effectively showcases
                my skills and products?
              </li>
              <li>
                What are the best practices for designing a portfolio website?
                <ul>
                  <li>
                    What are the key elements of an effective portfolio website?
                  </li>
                  <li>
                    How can I use design principles to create a visually
                    appealing and user-friendly website?
                  </li>
                  <li>
                    How can I use multimedia elements to showcase my work and
                    enhance the user experience?
                  </li>
                </ul>
              </li>
              <li>
                How can I optimize my portfolio website for usability?
                <ul>
                  <li>
                    What are the primary tasks that users are likely to perform
                    on the website?
                  </li>
                  <li>
                    How can I improve the website's navigation and performance
                    to enhance the user experience?
                  </li>
                </ul>
              </li>
              <li>
                How can I choose the right typography and color scheme for my
                portfolio website?
                <ul>
                  <li>
                    What typography options are available, and which would be
                    most effective for my website?
                  </li>
                  <li>
                    What color schemes would be most effective for my portfolio
                    website to create a visually appealing and cohesive design?
                  </li>
                </ul>
              </li>
              <li>
                How can I use usability testing to improve my portfolio website?
                <ul>
                  <li>
                    What tasks or scenarios should I use in usability testing,
                    and how can I measure their success?
                  </li>
                  <li>
                    What tools should I use to collect data from the usability
                    test?
                  </li>
                </ul>
              </li>
              <li>
                Which front-end frameworks and libraries can I use to develop my
                portfolio website and what are their benefits?
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="portfolioresearch-page-results">
        <h1>Research results</h1>

        <div className="wrapper">
          <div className="research-box-1">
            <h2>Question</h2>
            <p>
              How can I use design principles to create a visually appealing and
              user-friendly website?
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
            <span className="chip">web design principles</span>
            <span className="chip">how to use web design principles</span>
            <span className="chip">
              incorporate web design principles for portfolio website
            </span>
            <h2>Search engine</h2>
            <p className="search-engine" onClick={openGoogle}>
              Google
            </p>
            <h2>Results</h2>
            <p>
              9 principles of good web design & Z-Shaped Pattern For Reading Web
              Content.
              <span className="read-more-btn" onClick={openDoc}>
                Read more
              </span>
            </p>
            <h2>Conclusion</h2>
            <p>
              From the results I concluded that I will to aim to utilise most
              suggestions in my portfolio website. I learnt about the Zig-Zag
              pattern and I should use it in my portfolio website as well.
            </p>
            <h2>Research sources</h2>
            <p>
              Marianne. (2021, September 30). 9 PRINCIPLES OF GOOD WEB DESIGN,
              from https://www.feelingpeaky.com/9-principles-of-good-web-design/
            </p>
            <p>
              Nick Babich. (2017, June 16). Z-Shaped Pattern For Reading Web
              Content, from
              https://uxplanet.org/z-shaped-pattern-for-reading-web-content-ce1135f92f1c
            </p>
          </div>
          <div className="research-box-2">
            <h2>Question</h2>
            <p>
              Which front-end frameworks and libraries I can use to develop my
              portfolio website and what are their benefits?
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
            <span className="chip">javascript front-end libraries</span>
            <span className="chip">
              front end frameworks for making portfolio website
            </span>
            <span className="chip">benefits of using React.js</span>
            <span className="chip">CSS libraries</span>
            <span className="chip">
              libraries & frameworks for making animations in javascript
            </span>
            <h2>Search engine</h2>
            <p className="search-engine" onClick={openGoogle}>
              Google
            </p>
            <h2>Results</h2>
            <p>
              React is a popular front-end JavaScript library for building user
              interfaces, and it offers several benefits, including..
              <span className="read-more-btn" onClick={openDoc}>
                Read more
              </span>
            </p>
            <h2>Conclusion</h2>
            <p>
              I decided to use React for developing the website mainly because I
              wanted the website to have better performance and fast rendering
              compared to using standard HTML with vanilla javascript. Moreover
              thanks to its component based architecture I can easily create
              reusable components and use them in all over the pages. This would
              save me time and effort. Additionally I decided to use Sass and
              Framer motion due their benefits.
            </p>
            <h2>Research sources</h2>
            <p>
              Sass. (n.d.). Documentation, from
              https://sass-lang.com/documentation/
            </p>
            <p>
              Oleg Kopachovets. (2023, March 13). 8 Benefits of ReactJS: Is It
              Worth Using in Your Project? from
              https://procoders.tech/blog/advantages-of-using-reactjs/
            </p>
            <p>
              Glyn Lewington. (2021, July 29). Framer Motion tutorial: How to
              easily create React animations, from
              https://blog.logrocket.com/framer-motion-tutorial/
            </p>
          </div>
          <div className="research-box-3">
            <h2>Question</h2>
            <p>
              What colour schemes would be most effective for my portfolio
              website to create a visually appealing and cohesive design?
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
            <span className="chip">colours in web design</span>
            <span className="chip">
              how to create colour scheme for websites
            </span>
            <span className="chip">colour theory in web design</span>
            <h2>Search engine</h2>
            <p className="search-engine" onClick={openGoogle}>
              Google
            </p>
            <h2>Results</h2>
            <p>
              The best place to start when creating a colour palette is with the
              primary colour. A palette's primary colour is the star of the
              show. If we follow the 60/30/10 rule the primary colour takes up
              about 60% of the colour on a website.
              <span className="read-more-btn" onClick={openDoc}>
                Read more
              </span>
            </p>
            <h2>Conclusion</h2>
            <p>
              From the information I found I can conclude that I should use the
              60/30/10 rule as well as other colour theory principles.
            </p>
            <h2>Research sources</h2>
            <p>
              Stephanie Corrigan. (n.d.). Ultimate Guide To Choosing Colors for
              Web Design, from
              https://www.flux-academy.com/blog/ultimate-guide-to-choosing-colors-for-web-design
            </p>
            <p>
              Stephanie Corrigan. (n.d.). How to strategically use color in
              website design, from
              https://www.flux-academy.com/blog/how-to-strategically-use-color-in-website-design
            </p>
            <p>
              Benedicta Christina. (2022, April 1.). The 60:30:10 color rule for
              UI design, from
              https://bootcamp.uxdesign.cc/the-60-30-10-color-rule-for-ui-design-32695d04a7c2
            </p>
          </div>
          <div className="research-box-4">
            <h2>Question</h2>
            <p>
              What typography options are available, and which would be most
              effective for my website?
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
            <span className="chip">best fonts for websites</span>
            <span className="chip">
              how to pick the right typography in web design?
            </span>
            <h2>Search engine</h2>
            <p className="search-engine" onClick={openGoogle}>
              Google
            </p>
            <h2>Results</h2>
            <p>
              Typography plays a critical role on any website by ensuring we can
              comfortably read and process all its text-based content. If a
              website’s typography works, we won’t notice. If it fails, chances
              are we’ll bounce off the page..
              <span className="read-more-btn" onClick={openDoc}>
                Read more
              </span>
            </p>
            <h2>Conclusion</h2>
            <p>
              After I learnt more about typography in web design and I
              researched available options for a font family I decided to use
              Roboto font. After observing the options for different fonts I
              decided to use Roboto font.
            </p>
            <h2>Research sources</h2>
            <p>
              Jamie Juviler. (2020, September 28).The Beginner's Guide to
              Typography in Web Design, from
              https://blog.hubspot.com/website/website-typography
            </p>
            <p>
              Deanna McLean. (n.d.). 12 Best Google Fonts for Websites (and Best
              Practices) from
              https://www.elegantthemes.com/blog/design/best-google-fonts#what-are-google-fonts
            </p>
          </div>

          <div className="research-box-5">
            <h2>Question</h2>
            <p>
              How can I improve the website's navigation and performance to
              enhance the user experience?
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
            <span className="chip">how to improve performance of website?</span>
            <span className="chip">website optimization techniques</span>
            <h2>Search engine</h2>
            <p className="search-engine" onClick={openGoogle}>
              Google
            </p>
            <h2>Results</h2>
            <p>
              Once you have tested the speed of your website, you can start
              optimizing it. There are a lot of different ways to make your
              website work faster and we created the list of the most effective
              ones..
              <span className="read-more-btn" onClick={openDoc}>
                Read more
              </span>
            </p>
            <h2>Conclusion</h2>
            <p>
              From the results, I concluded that I will implement the following
              strategies to optimize my website: optimizing the size of images
              on my website by compressing them without compromising quality and
              utilizing HTML responsive image attributes, moving to a better web
              host, such as a Virtual Private Server (VPS) or dedicated server,
              to ensure faster performance and better resource allocation and
              also usage of Content Delivery Network (CDN) to improve load times
              and deliver content.
            </p>
            <h2>Research sources</h2>
            <p>
              AltexSoft. (2018, Apr 30). 12 Techniques of Website Speed
              Optimization: Performance Testing and Improvement Practices, from
              https://www.altexsoft.com/blog/engineering/12-techniques-of-website-speed-optimization-performance-testing-and-improvement-practices/
            </p>
          </div>

          <div className="research-box-6">
            <h2>Question</h2>
            <p>
              What tools should I use to collect data from the usability test?
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
            <span className="chip">free tools for usability testing</span>
            <span className="chip">best tools for usability testing</span>
            <h2>Search engine</h2>
            <p className="search-engine" onClick={openGoogle}>
              Google
            </p>
            <h2>Results</h2>
            <p>
              Useberry is a usability testing tool that focuses on multi-method
              unmoderated user research. If you’re looking for a quick way to
              test your designs and get user feedback, Useberry is a good
              contender because it provides you with many quick templates to
              start up with to run your tests and integrates with all the major
              design tools right off the bat. It’s one of the best website
              testing sites...
              <span className="read-more-btn" onClick={openDoc}>
                Read more
              </span>
            </p>
            <h2>Conclusion</h2>
            <p>
              For this question I concluded that Useberry has all the features
              that I am looking for therefore I will use Useberry.
            </p>
            <h2>Research sources</h2>
            <p>
              Renaissance Rachel. (2023, Jan 25). 11 Best User Testing Tools of
              2023, from https://renaissancerachel.com/best-user-testing-tools/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfilioResearchPage;
