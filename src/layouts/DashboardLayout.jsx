import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const sidebarStyle = {
  backgroundColor: "#2d3748",
  width: "240px",
  color: "#fff",
  height: "100vh",
};

const linkStyle = {
  display: "block",
  padding: "12px 24px",
  textDecoration: "none",
  color: "#fff",
};

const activeLinkStyle = {
  backgroundColor: "red",
};

const DashboardLayout = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <nav style={sidebarStyle}>
          <div style={{ padding: "1rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Dashboard
            </h2>
          </div>
          <ul style={{ padding: "1rem 0" }}>
          <li>
              <NavLink
                to="/"
                activeClassName="active"
                style={linkStyle}
                activeStyle={activeLinkStyle}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/profile"
                activeClassName="active"
                style={linkStyle}
                activeStyle={activeLinkStyle}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/products"
                activeClassName="active"
                style={linkStyle}
                activeStyle={activeLinkStyle}
              >
                Products
              </NavLink>
            </li>
            {/* Add more dashboard routes here */}
          </ul>
        </nav>

        {/* Content Area */}
        <div style={{ flex: 1 }}>
          <div style={{ padding: "1rem" }}>
                <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
