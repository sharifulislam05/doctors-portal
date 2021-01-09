import React from "react";
import { Link } from "react-router-dom";
import './_navBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Dental Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link ">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link ">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
