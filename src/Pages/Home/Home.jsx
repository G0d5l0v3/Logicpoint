import React from "react";
import { useState } from "react";
import logo from "../../Assets/Images/Logicpoint-Logo.svg";
import { NavLink } from "react-router-dom";
import "../../index.css";

const Home = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <React.Fragment>
      <header className="min-h-screen w-full bg px-[10%]">
        <nav className="flex items-center justify-between text-white text-sm font-[poppins-regular] pt-[0.5rem]">
          <img src={logo} alt="logo" />
          <NavLink
            className="hidden md:flex transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
            to=""
          >
            HOME
          </NavLink>
          <NavLink
            className="hidden md:flex transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
            to=""
          >
            ABOUT US
          </NavLink>
          <NavLink
            className="hidden md:flex transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
            to=""
          >
            SERVICES
          </NavLink>
          <NavLink
            className="hidden md:flex transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
            to=""
          >
            PARTNERS
          </NavLink>

          <button className="hidden md:flex bg-[#E87B37] px-[1rem] py-[0.5rem] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            CONTACT US
          </button>

          <div className="md:hidden">
            <i
              className={
                clicked
                  ? "fas fa-times text-white cursor-[pointer]"
                  : "fas fa-bars text-white cursor-[pointer]"
              }
              onClick={handleClick}
            ></i>
          </div>
        </nav>

        <main className="mt-[10rem]">
          <div className="border-b-2 border-[#E87B37] w-[6rem] sm:w-[7rem] md:w-[10rem] lg:w-[12rem]"></div>
          <div className="text-white">
            <h1 className=" font-[serif-regular] text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-[0.5rem]">
              An Innovative Agency For
            </h1>
            <h1 className="font-[serif-regular] text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-[0.5rem]">
              Forward-thinking Brands.
            </h1>
            <p className="font-[poppins-regular] pt-[0.5rem] text-[0.6rem] md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            </p>
            <p className="font-[poppins-regular] text-[0.6rem] md:text-sm">
              elit. Ut elit tellus, luctus nec ullamcorper mattis,
            </p>
            <p className="font-[poppins-regular] text-[0.6rem] md:text-sm">
              pulvinar dapibus leo.
            </p>

            <button className="px-[1rem] py-[0.5rem] mt-[1rem] text-[#E87B37] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-[poppins-regular] text-[0.7rem] sm:text-[0.6rem] md:text-sm lg:text-lg border-[#E87B37] text-align text-center border-2 w-[7rem] sm:w-[8rem] md:w-[10rem]">
              Learn More
            </button>
          </div>
        </main>
      </header>
    </React.Fragment>
  );
};

export default Home;
