import React from "react";
import { Outlet, Link, Routes, Route } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: "flex" }}>
        <ul>
          <li><Link to="/dashboard/home">Home</Link></li>
          <li><Link to="/dashboard/about">About</Link></li>
        </ul>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/about" element={<About />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return <h3>Home Page </h3>;
};

const About = () => {
  return <h3>About Page</h3>;
};

export default DashboardLayout;
