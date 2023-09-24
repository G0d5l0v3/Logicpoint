import React from "react";
import logo from "../../Assets/Images/Logicpoint-Logo.svg";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between w-full items-center pt-2">
        <div className="p-[1rem] rounded-md bg-white ">
          <img src={logo} alt="lpic-logo" className="h-10" />
        </div>
        <div className=" hidden lg:flex lg:gap-[3rem] lg:cursor-pointer">
          <Link path="home" className="hover:text-black">
            Home
          </Link>
          <Link path="aboutUs" className="hover:text-black">
            About Us
          </Link>
          <Link path="services" className="hover:text-black">
            Services
          </Link>
          <Link path="contactUs" className="hover:text-black">
            Contact Us
          </Link>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
