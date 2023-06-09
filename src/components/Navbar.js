import React, { useCallback, useEffect, useRef } from "react";
import "../App";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { useLocation } from "react-router-dom";

const AppBar = () => {
  const navRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const navigateToPageHandler = () => {
    if (navRef.current.classList.contains("responsive_nav")) {
      navRef.current.classList.toggle("responsive_nav");
    }

    return;
  };

  const activeClassChecker = useCallback(
    (value) => {
      if (location.pathname === value) {
        return "active";
      }

      // if (location.pathname.includes("/group-project")) {
      //   return "active";
      // }

      return null;
    },
    [location.pathname]
  );

  // activeClassChecker();

  useEffect(() => {
    console.log("navbar listening");
  });

  return (
    <header>
      <div className="header-heading">
        <h1 onClick={() => navigate("/")}>
          Yusmen <span style={{ color: "#eb6f5c" }}>Kadir</span>
        </h1>
      </div>

      <nav ref={navRef}>
        <Link
          onClick={() => navigateToPageHandler()}
          to="/"
          className={activeClassChecker("/")}
        >
          Home
        </Link>

        <Link
          to="/individual-project"
          onClick={() => navigateToPageHandler()}
          className={activeClassChecker("/individual-project")}
        >
          Individual Project
        </Link>

        <Link
          to="/group-project"
          onClick={() => navigateToPageHandler()}
          className={activeClassChecker("/group-project")}
        >
          Group Project
        </Link>

        <Link
          to="/international-project"
          onClick={() => navigateToPageHandler()}
          className={activeClassChecker("/international-project")}
        >
          International Project
        </Link>
        <Link
          to="/documents"
          onClick={() => navigateToPageHandler()}
          className={activeClassChecker("/documents")}
        >
          Documents
        </Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes color="#ffffff" />
        </button>
      </nav>
      <button className="nav-btn nav-open-btn" onClick={showNavbar}>
        <FaBars color="#ffffff" />
      </button>
    </header>
  );
};

export default AppBar;
