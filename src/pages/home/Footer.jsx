import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0a0a1a] font-[exo] text-white">
      <div className="grid md:grid-cols-2 place-content-center gap-3 min-h-screen max-w-[1440px] mx-auto px-[2rem] sm:px-[5rem]">
        <div className="">

        </div>
        <div className="flex justify-around">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#E87B37] text-md sm:text-lg lg:text-xl">Navigation</h1>
            <NavLink to="/about-us" className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]">
              About Us
            </NavLink>
            <NavLink to="/services" className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]">
              Services
            </NavLink>
            <NavLink to="/blog" className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]">
              Blog
            </NavLink>
            <NavLink to="/leadership" className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]">
              Leadership
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#E87B37] text-md sm:text-lg lg:text-xl">Resources</h1>
            <NavLink to="" className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]">
              Gallery
            </NavLink>
            <NavLink to="" className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]">
              Case Studies
            </NavLink>
            <NavLink to="" className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]">
              Privacy Policy
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#E87B37] text-md sm:text-lg lg:text-xl">Contact</h1>
            <p className="text-sm sm:text-md lg:text-lg">
              support@logicpointng.com
            </p>
            <p className="text-sm sm:text-md lg:text-lg">NG: +234 (1) 888 8185</p>
            <p className="text-sm sm:text-md lg:text-lg">US: +1 (609) 874-9097</p>
          </div>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Footer;
