import React from "react";
//import Button from "../../components/button/Button";

const WhatMotivatesUs = () => {
  return (
    <div className="bg-[#181830]">
      <div
        className="font-[exo] min-h-[80svh] flex flex-col md:flex max-w-[1440px] mx-auto px-[2rem] sm:px-[5rem]"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h1 className="text-white py-[2rem] font-semibold text-4xl sm:text-5xl lg:text-6xl py-[0.3rem] text-[#181830]">
          <span className="border-b-8 border-[#5D1570] ">What </span>
          <span className="text-[#E87B37]">Motivates </span>
          <span>Us </span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default WhatMotivatesUs;
