import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ auth }) => {
  const { username } = auth.user;
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
          {username ? (
            <>
              <ul className="nav-links">
                <li>
                  <Link to="/">
                    <i className="fas fa-compass" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-heart" />
                  </Link>
                </li>
                <li>
                  <Link to={"/@"+username}>
                    <i className="fas fa-user" />
                  </Link>
                </li>
                <li>
                  <Link to="/logout">
                    <i className="fas fa-sign-out-alt" />
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <Link to="/signin">
                <button className="btn btn-primary">Sign in</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-default">Sign up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object
};

export default Navbar;
