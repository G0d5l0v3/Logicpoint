import React from "react";
import { Element } from "react-scroll";
//import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Element name="about">

        <div className="flex flex-col justify-center items-center h-[50svh] w-full ">
          <div className="font-[poppins-regular]">
            <h1 className="text-[#ff5e00] text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-[1000]" data-aos="fade-up">
              About Us
            </h1>
          </div>
          <div className=""></div>
        </div>
      </Element>
    </React.Fragment>
  );
};

export default AboutUs;
