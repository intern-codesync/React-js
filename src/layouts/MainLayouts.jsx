import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
// import Home from "../components/Home/Home";
// import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";

const MainLayouts = () => {
  return (
    <>
      <div>
        {/* <Header/>
        <Outlet/>
        <Footer/> */}
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayouts;
