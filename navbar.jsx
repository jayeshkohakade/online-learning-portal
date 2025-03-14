import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./App1.css"; // Import the CSS file for styling
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get current page URL

  return (
    <nav className="navbar">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <label className="logo">ThinkingMinds</label>
      <ul>
      <li><Link to="/">Home</Link></li>
        {location.pathname !== "/courses" && (
          <li><Link className="courses" to="/courses">Courses</Link></li>
        )}
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
        {location.pathname !== "/signin" && (
          <li><Link className="loginbtn" to="/signin">Sign-In</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
