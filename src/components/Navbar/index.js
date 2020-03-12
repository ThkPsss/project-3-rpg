import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Development Links
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/opening"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home Page
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/characterCreation"
              className={window.location.pathname === "/characterCreation" ? "nav-link active" : "nav-link"}
            >
              Character Creation PAge
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Game"
              className={window.location.pathname === "/Game" ? "nav-link active" : "nav-link"}
            >
              Main Game
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
