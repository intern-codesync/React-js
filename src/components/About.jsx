import React from "react";
import { Link } from "react-router-dom";
import DashboardAnalytics from "./DashboardAnalytics";

function About() {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
    textDecoration: "none",
    color: "#333",
  };

  return (
    <>
    <section>
      <h1>About Component</h1>
      <p>This is the About page content.</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={cardStyle}>
          <h2>User Profile 123</h2>
          <p>This is the profile of user 123.</p>
          <Link
            to="/UserProfile/123"
            style={{ textDecoration: "none", color: "blue" }}
          >
            View Profile
          </Link>
        </div>
        <div style={cardStyle}>
          <h2>User Profile 456</h2>
          <p>This is the profile of user 456.</p>
          <Link
            to="/UserProfile/456"
            style={{ textDecoration: "none", color: "blue" }}
          >
            View Profile
          </Link>
        </div>
        {/* You can add more dynamic links here */}
      </div>
      <DashboardAnalytics/>
      </section>
    </>
  );
}

export default About;
