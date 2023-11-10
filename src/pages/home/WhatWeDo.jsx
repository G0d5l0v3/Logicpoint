import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="flex min-h-[70svh] items-center justify-between max-w-[1440px] mx-auto px-[2rem] sm:px-[5rem]">
        <div className="flex flex-col">
          <div>
            <h1
              className="font-[exo] font-semibold text-4xl sm:text-5xl lg:text-6xl py-[0.3rem] text-[#181830]"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <span className="text-[#E87B37] border-b-8 border-[#5D1570] ">
                What
              </span>{" "}
              We Do
            </h1>
          </div>
          <div
            className="font-[exo] text-sm sm:text-md lg:text-lg"

          >
            <p className="pt-[4rem] pb-[0.3rem}">
              There are no limitations in terms of the industries{" "}
            </p>
            <p className="pb-[0.3rem}">
              we can assist, as we employ and upskill our teams{" "}
            </p>
            <p className="pb-[0.15rem]">
              based on the customized requirements of our
            </p>
            <p className="">partner clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
