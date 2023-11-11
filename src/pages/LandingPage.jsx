import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "./home/Home";
import WhatWeDo from "./home/WhatWeDo";
import OurSevices from "./home/OurServices";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <WhatWeDo />
      <OurSevices />
    </div>
  );
};

export default LandingPage;
