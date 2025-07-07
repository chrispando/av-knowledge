import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeadphones,
  faFile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import "./LowerNavBar.css";

const LowerNavBar = ({ isOpen }) => {
  const [navbarOpen, setNavbarOpen] = useState(isOpen);
  const { userInfo } = useSelector((state) => state.auth); // Access the global state

  const clickHandler = () => {
    const container = document.querySelector(".container");
    container.classList.remove("show-nav");
  };

  return (
    <nav className={navbarOpen ? "nav-list show" : "nav-list"}>
      <ul>
        <li className="nav-list-item">
          <Link to="/" onClick={clickHandler}>
            <FontAwesomeIcon icon={faHouse} /> Home
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/about" onClick={clickHandler}>
            <FontAwesomeIcon icon={faHeadphones} /> About
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/articles-list" onClick={clickHandler}>
            <FontAwesomeIcon icon={faFile} /> Articles
          </Link>
        </li>
        {userInfo ? (
          <li className="nav-list-item">
            <Link to="/profile" onClick={clickHandler}>
              <FontAwesomeIcon icon={faUser} /> Profile
            </Link>
          </li>
        ) : (
          <li className="nav-list-item">
            <Link to="/sign-in" onClick={clickHandler}>
              <FontAwesomeIcon icon={faUser} /> Sign In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default LowerNavBar;
