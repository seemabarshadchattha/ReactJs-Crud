import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        React CRUD
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <NavLink exact to="/add">
          <button className="btn btn-outline-light my-2 my-sm-0">
            Add User
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
