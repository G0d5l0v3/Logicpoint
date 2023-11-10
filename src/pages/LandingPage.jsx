import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "./home/Home";
import WhatWeDo from "./home/WhatWeDo";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <WhatWeDo />
    </div>
  );
};

export default LandingPage;
