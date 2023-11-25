import React from "react";
import logo from "../../assets/images/Logicpoint-Logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#313242] font-[exo] text-white">
      <div className="grid grid-cols-2 place-content-center gap-3 min-h-screen max-w-[1440px] mx-auto px-[2rem] sm:px-[5rem]">
        <div className="rounded-lg bg-[white] shadow-lg h-[30svh] p-[5%]">
          <img src={logo} alt="company-logo" className="w-25 h-10" />
        </div>
        <div className="flex justify-around ">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#E87B37] text-xl">Quick Link</h1>
            <NavLink to="/about-us" className="text-sm sm:text-md lg:text-lg">
              About Us
            </NavLink>
            <NavLink to="/services" className="text-sm sm:text-md lg:text-lg">
              Services
            </NavLink>
            <NavLink to="/blog" className="text-sm sm:text-md lg:text-lg">
              Blog
            </NavLink>
            <NavLink to="/leadership" className="text-sm sm:text-md lg:text-lg">
              Leadership
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#E87B37] text-xl">Resources</h1>
            <NavLink to="/about-us" className="text-sm sm:text-md lg:text-lg">
              Gallery
            </NavLink>
            <NavLink to="/leadership" className="text-sm sm:text-md lg:text-lg">
              Case Studies
            </NavLink>
            <NavLink to="/services" className="text-sm sm:text-md lg:text-lg">
              Privacy Policy
            </NavLink>
            <NavLink to="/blog" className="text-sm sm:text-md lg:text-lg">
              Articles
            </NavLink>

          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#E87B37] text-xl">Quick Contact</h1>
            <p className="text-sm sm:text-md lg:text-lg">
              support@logicpointng.com
            </p>
            <p className="text-sm sm:text-md lg:text-lg">NG: +234 (1) 888 8185</p>
            <p className="text-sm sm:text-md lg:text-lg">US: +1 (609) 874-9097</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
