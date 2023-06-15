import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myImage from "../assets/me-removebg-preview.png";
import portFolioImage from "../assets/website-solution.png";
import groupImage from "../assets/LotiIcon.png";
import watchImage from "../assets/Watches.png";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { FaYoutube } from "react-icons/fa";
import individualProjectReadingGuide from "../documents/Reading Guide Portfolio.pdf";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const showcaseVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
      },
    },
  };
  return (
    <div className="home">
      <div className="home-showcase">
        <motion.div
          className="home-showcase"
          variants={showcaseVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : ""}
        >
          <div>
            <motion.img
              src={myImage}
              alt="#"
              className="my-img"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1.5,
                type: "spring",
                stiffness: 120,
              }}
            />
          </div>
          <div className="home-info">
            <motion.h2
              className="info-heading"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 1.5,
                type: "spring",
                stiffness: 120,
              }}
            >
              Hi I am Yusmen 👋
            </motion.h2>
            <motion.p
              className="info-p"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 1.1,
                duration: 1.5,
                type: "spring",
                stiffness: 120,
              }}
            >
              Passionate UX Designer & Developer
            </motion.p>

            <motion.a
              className="info-p-youtube"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 1.1,
                duration: 1.5,
                type: "spring",
                stiffness: 120,
              }}
              onClick={() =>
                window.open("https://www.youtube.com/c/KadirMedia")
              }
            >
              <FaYoutube size={30} color="#eb6f5c" />

              <span style={{ marginLeft: "5px" }}>Watch KadirMedia</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="home-projects" ref={ref}>
        <h1 className="projects-heading">My Projects</h1>

        <div className="home-projects-wrapper">
          <motion.div
            className="image-container"
            variants={projectVariants}
            animate={inView ? "visible" : "hidden"}
          >
            <img src={watchImage} alt="#" />
            <div className="overlay">
              <h2>Group Project</h2>
              <h5>Control of noise</h5>
              <div className="call-to-action">
                <Link>Reading Guide </Link>
                <Link to="/group-project">Overview</Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="image-container"
            variants={projectVariants}
            animate={inView ? "visible" : "hidden"}
          >
            <img src={portFolioImage} alt="#" />
            <div className="overlay">
              <h2>Individual Project</h2>
              <h5>Portfolio Website</h5>
              <div className="call-to-action">
                <Link
                  to={individualProjectReadingGuide}
                  target="_blank"
                  rel="noreferrer"
                >
                  Reading Guide
                </Link>
                <Link to="/individual-project" preventScrollReset={true}>
                  Overview
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="image-container"
            variants={projectVariants}
            animate={inView ? "visible" : "hidden"}
          >
            <img src={groupImage} alt="#" />
            <div className="overlay">
              <h2>International Project</h2>
              <h5>Project for Woonbedrijf</h5>
              <div className="call-to-action">
                <Link>Reading Guide </Link>
                <Link to="/international-project">Overview</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
