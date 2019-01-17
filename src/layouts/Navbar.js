import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-logo">
          <span className="icon">
            <i className="fab fa-instagram" />
          </span>
          <span className="name" />
        </div>
        <div className="nav-search">
          <input type="text" className="search" placeholder="Search" />
        </div>
        <div className="nav-account">
          <button className="btn btn-primary">SignIn</button>
          <button className="btn btn-default">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
