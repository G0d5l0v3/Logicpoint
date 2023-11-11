import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "./home/Home";
import WhatWeDo from "./home/WhatWeDo";
import ServicesWeProvide from "./home/ServicesWeProvide";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <WhatWeDo />
      <ServicesWeProvide />
    </div>
  );
};

export default LandingPage;
