import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faArrowRotateRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // Manage nav open/close state
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // For navigation

  const isArticlePage = location.pathname.startsWith("/article/");

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev); // Toggle the nav open/close state
  };

  useEffect(() => {
    const container = document.querySelector(".container");

    if (container) {
      if (isNavOpen) {
        container.classList.add("show-nav");
      } else {
        container.classList.remove("show-nav");
      }
    }
  }, [isNavOpen]); // Update the container class whenever `isNavOpen` changes

  // Reset nav state on route change
  useEffect(() => {
    setIsNavOpen(false); // Close the nav whenever the route changes
  }, [location.pathname]);

  return (
    <div className="circle-container">
      <div className="circle">
        {isArticlePage ? (
          // Render "Go Back" button for article pages
          <button className="go-back-button" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        ) : (
          // Default navbar content with open/close buttons
          <>
            <button id="close" onClick={toggleNav}>
              <FontAwesomeIcon icon={faX} />
            </button>
            <button id="open" onClick={toggleNav}>
              <FontAwesomeIcon icon={faArrowRotateRight} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
