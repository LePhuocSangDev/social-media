import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SideBarLeft from "../components/SideBarLeft/SideBarLeft";
import SideBarRight from "../components/SideBarRight/SideBarRight";
import "./Layout.scss";

const Layout = () => {
  const [showSbLeft, setShowSbLeft] = useState(false);
  return (
    <div className="layout">
      <SideBarLeft showSbLeft={showSbLeft} setShowSbLeft={setShowSbLeft} />
      <div style={{ flex: 10 }}>
        <Navbar showSbLeft={showSbLeft} />
        <Outlet />
        <Footer />
      </div>
      <SideBarRight />
    </div>
  );
};

export default Layout;
