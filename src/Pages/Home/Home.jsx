import React from "react";
import { useState } from "react";
import logo from "../../Assets/Images/Logicpoint-Logo.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../../index.css";

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    setIsAnimating(!isAnimating);
  };

  return (
    <React.Fragment>
      <header className="min-h-screen w-full bg px-[10%]">
        <nav className="flex items-center top-0 justify-between w-full text-white text-sm font-[poppins-regular] pt-[0.5rem]">
          <div className="pr-[7rem]">
            <img src={logo} alt="logo" className="w-full" />
          </div>

          <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:w-full">
            <NavLink
              className="text-[0.6rem] md:text-[0.85rem] transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
              to=""
            >
              HOME
            </NavLink>
            <NavLink
              className="text-[0.6rem] md:text-[0.85rem] md:text-center transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
              to=""
            >
              ABOUT US
            </NavLink>
            <NavLink
              className=" text-[0.6rem] md:text-[0.85rem] transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
              to=""
            >
              SERVICES
            </NavLink>
            <NavLink
              className="text-[0.4rem]  sm:text-[0.6rem] md:text-[0.85rem]  transition duration-300 ease-in-out hover:border-b-2 hover:border-[auto] md:hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
              to=""
            >
              PARTNERS
            </NavLink>
            <button className="text-[0.5rem]  sm:text-[0.6rem] md:text-[0.85rem] bg-[#E87B37] px-[1rem] py-[0.5rem] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              CONTACT US
            </button>
          </div>

          <motion.div
            className={
              clicked
                ? "flex flex-col fixed right-0 top-[5rem] p-[3rem]  bg-[#000] w-[30%] transition duration-300 ease-in-out justify-start items-start md:hidden"
                : "hidden"
            }
            initial={false}
            animate={
              isAnimating ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
            }
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <NavLink
              className="text-[0.5rem]  sm:text-[0.6rem] md:text-[0.85rem] transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
              to=""
            >
              HOME
            </NavLink>
            <NavLink
              className="text-[0.5rem]  sm:text-[0.6rem] md:text-[0.85rem] transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
              to=""
            >
              ABOUT US
            </NavLink>
            <NavLink
              className="text-[0.5rem]  sm:text-[0.6rem] md:text-[0.85rem] transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
              to=""
            >
              SERVICES
            </NavLink>
            <NavLink
              className="text-[0.5rem]  sm:text-[0.6rem] md:text-[0.85rem]  transition duration-300 ease-in-out hover:border-b-2 hover:border-[auto] md:hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
              to=""
            >
              PARTNERS
            </NavLink>
            <button className="text-[0.35rem]  sm:text-[0.6rem] mt-[1rem] bg-[#E87B37] sm:py-[0.3rem] px-[0.3rem] sm:px-[1rem] md:px-[1rem] md:text-[0.85rem] md:py-[0.5rem] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              CONTACT US
            </button>
          </motion.div>

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
          <motion.div
            className="border-b-2 border-[#E87B37] w-[6rem] sm:w-[7rem] md:w-[10rem] lg:w-[12rem]"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
          ></motion.div>
          <div className="text-white">
            <motion.h1
              className="font-[serif-regular] text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-[0.5rem]"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            >
              An Innovative Agency For
            </motion.h1>
            <motion.h1
              className="font-[serif-regular] text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-[0.5rem]"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            >
              Forward-thinking Brands.
            </motion.h1>
            <motion.p
              className="font-[poppins-regular] pt-[0.5rem] text-[0.6rem] sm:text-[0.8rem] md:text-[1rem]"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            </motion.p>
            <motion.p
              className="font-[poppins-regular] text-[0.6rem] md:text-[1rem]"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            >
              elit. Ut elit tellus, luctus nec ullamcorper mattis,
            </motion.p>
            <motion.p
              className="font-[poppins-regular] text-[0.6rem] md:text-[1rem]"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            >
              pulvinar dapibus leo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            >
              <button className="px-[1rem] py-[0.5rem] mt-[1rem] text-[#E87B37] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-[poppins-regular] text-[0.7rem] sm:text-[0.6rem] md:text-sm lg:text-lg border-[#E87B37] text-align text-center border-2 w-[7rem] sm:w-[8rem] md:w-[10rem]">
                Learn More
              </button>
            </motion.div>
          </div>
        </main>
      </header>
    </React.Fragment>
  );
};

export default Home;
