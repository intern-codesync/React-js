import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/AboutPage";
import Page404 from "./pages/Page404";
import UserProfile from "./pages/Useparams";
import UserNavigation from "./pages/UserNavigation"
import Navbar from "./components/Navbar";
import UseLocation  from "./pages/UseLocation";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<div>hello</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Page404/>} />
        <Route path="/UserProfile/:Id" element={<UserProfile />} />
        <Route path="/UserNavigation" element={<UserNavigation/>} />
        <Route path="/UseLocation/fullroute/uselocation" element={<UseLocation/>} />
      </Routes>
    </Router>
  );
};

export default App;
