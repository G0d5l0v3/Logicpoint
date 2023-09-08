import React from "react";
import logo from "../../Assets/Images/Logicpoint-Logo.svg";
import { NavLink } from "react-router-dom";
import "../../index.css";

const Home = () => {
  return (
    <React.Fragment>
      <header className="min-h-screen w-full bg px-[10%]">
        <nav className="flex items-center justify-between text-white text-sm font-[poppins-regular] pt-[0.5rem]">
          <img src={logo} alt="logo" />
          <NavLink>HOME</NavLink>
          <NavLink>ABOUT US</NavLink>
          <NavLink>SERVICES</NavLink>
          <NavLink>PARTNERS</NavLink>
          <button className="bg-[#E87B37] px-[1rem] py-[0.5rem]">
            CONTACT US
          </button>
        </nav>

        <main className="mt-[15%]">
          <div className="border-b-2 border-[#E87B37] w-[18%]"></div>
          <div>
            <h1 className="text-white font-[serif-regular] text-6xl pt-[0.5rem]">
              An Innovative Agency For
            </h1>
            <h1 className="text-white font-[serif-regular] text-6xl pt-[0.5rem]">
              Forward-thinking Brands.
            </h1>
            <p className="text-white font-[poppins-regular] pt-[0.5rem] text-[0.6rem] md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <p className="text-white font-[poppins-regular] text-[0.6rem] md:text-sm">elit. Ut elit tellus, luctus nec ullamcorper mattis,</p>
            <p className="text-white font-[poppins-regular] text-[0.6rem] md:text-sm">pulvinar dapibus leo.</p>
            <a href="" alt="learnMore">
              <div className="px-[1rem] py-[0.5rem] mt-[1rem] text-[#E87B37] font-[poppins-regular] text-[0.7rem] sm:text-[0.6rem] md:text-sm border-[#E87B37] text-align text-center border-2 w-[7rem] sm:w-[8rem] md:w-[10rem]">Learn More</div>
            </a>
          </div>
        </main>
      </header>
    </React.Fragment>
  );
};

export default Home;
