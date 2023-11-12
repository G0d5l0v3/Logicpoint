import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "./home/Home";
import WhatWeDo from "./home/WhatWeDo";
import OurSevices from "./home/OurServices";
import OurCommitment from "./home/OurCommitment";


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <WhatWeDo />
      <OurSevices />
      <OurCommitment />
    </div>
  );
};

export default LandingPage;
