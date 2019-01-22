import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">
          <div className="nav-logo">
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
            <span className="name" />
          </div>
        </Link>

        <div className="nav-search">
          <input type="text" className="search" placeholder="Search" />
        </div>
        <div className="nav-account">
          <Link to="/signin">
            <button className="btn btn-primary">Sign in</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-default">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
