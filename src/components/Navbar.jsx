import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#333",
    padding: "10px 0",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.5rem",
  };

  const navLinksStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  };

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "15px",
  };

  const navLinkActiveStyle = {
    color: "red!important",
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle} className="container">
        <NavLink to="/" style={logoStyle} className="logo">
          Learning REACT
        </NavLink>
        <ul style={navLinksStyle} className="nav-links">
          <li>
            <NavLink
              to="/"
              exact
              style={navLinkStyle}
              activeStyle={navLinkActiveStyle}
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={navLinkStyle}
              activeStyle={navLinkActiveStyle}
              className="nav-link"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/UserProfile/123"
              style={navLinkStyle}
              activeStyle={navLinkActiveStyle}
              className="nav-link"
            >
              Use Params
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/UseLocation/fullroute/uselocation"
              style={navLinkStyle}
              activeStyle={navLinkActiveStyle}
              className="nav-link"
            >
              Use Location
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/UserNavigation"
              style={navLinkStyle}
              activeStyle={navLinkActiveStyle}
              className="nav-link"
            >
              Link to home
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
