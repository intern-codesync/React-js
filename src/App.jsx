import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/AboutPage";
import Page404 from "./pages/Page404";
import UserProfile from "./pages/Useparams";
import UserNavigation from "./pages/UserNavigation";
import Navbar from "./components/Navbar";
import UseLocation from "./pages/UseLocation";
import DashboardLayout from "./components/DashboardLayout";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/userprofile/:Id" element={<UserProfile />} />
        <Route path="/usernavigation" element={<UserNavigation />} />
        <Route path="/uselocation/fullroute/uselocation" element={<UseLocation />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} /> {/* Nested routes for Dashboard */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
