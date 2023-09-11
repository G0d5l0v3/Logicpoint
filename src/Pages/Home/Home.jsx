import React from "react";
import { useState } from "react";
import logo from "../../Assets/Images/Logicpoint-Logo.svg";
import { Link, Element } from "react-scroll";
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
      <Element name="home">
        <header className="min-h-screen w-full bg px-[10%]">
          <nav className="flex items-center top-0 justify-between w-full text-white text-sm font-[poppins-regular] pt-[0.5rem]">
            <div className="pr-[10%]">
              <img src={logo} alt="logo" className="w-full" />
            </div>

            <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-full">
              <Link
                to="home"
                smooth={true}
                duration={1500}
                className="text-[#E87B37] text-[0.6rem] md:text-[0.85rem] cursor-pointer transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37]"
              >
                HOME
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1500}
                className="text-[0.6rem] md:text-[0.85rem] cursor-pointer md:text-center transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
              >
                ABOUT US
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={1500}
                className=" text-[0.6rem] md:text-[0.85rem] cursor-pointer transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
              >
                SERVICES
              </Link>
              <Link
                to="partners"
                smooth={true}
                duration={1500}
                className="text-[0.4rem]  sm:text-[0.6rem] cursor-pointer md:text-[0.85rem]  transition duration-300 ease-in-out hover:border-b-2 hover:border-[auto] md:hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] focus:text-[#E87B37] focus:border-b-2 focus:border-[#E87B37]"
              >
                PARTNERS
              </Link>
              <button className="text-[0.5rem]  sm:text-[0.6rem] cursor-pointer md:text-[0.85rem] bg-[#E87B37] px-[1rem] py-[0.5rem] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                CONTACT US
              </button>
            </div>

            <motion.div
              className={
                clicked
                  ? "flex flex-col fixed right-0 top-[5rem] p-[3rem] bg-[#000] w-[50%] transition duration-300 ease-in-out sm:w-[40%] md:w-[30%] justify-start items-start lg:hidden"
                  : "hidden"
              }
              initial={false}
              animate={
                isAnimating ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
              }
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              <Link
                to="home"
                smooth={true}
                duration={1500}
                onClick= {handleClick}
                className="text-[0.5rem] text-[#E87B37] sm:text-[0.6rem] cursor-pointer md:text-[0.85rem] transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37]"
              >
                HOME
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1500}
                onClick= {handleClick}
                className="text-[0.5rem]  sm:text-[0.6rem] cursor-pointer md:text-[0.85rem] transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] "
              >
                ABOUT US
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={1500}
                onClick={handleClick}
                className="text-[0.5rem] sm:text-[0.6rem] cursor-pointer md:text-[0.85rem] transition duration-300 ease-in-out hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37] "
              >
                SERVICES
              </Link>
              <Link
                to="partners"
                smooth={true}
                duration={1500}
                onClick= {handleClick}
                className="text-[0.5rem]  sm:text-[0.6rem] cursor-pointer md:text-[0.85rem]  transition duration-300 ease-in-out hover:border-b-2 hover:border-[auto] md:hover:border-b-2 hover:border-[#E87B37] hover:text-[#E87B37]"
              >
                PARTNERS
              </Link>
              <button className="text-[0.35rem]  sm:text-[0.6rem] mt-[1rem] bg-[#E87B37] sm:py-[0.3rem] px-[0.3rem] sm:px-[1rem] md:px-[1rem] md:text-[0.85rem] md:py-[0.5rem] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                CONTACT US
              </button>
            </motion.div>

            <div className="lg:hidden">
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

          <main className="mt-[13rem] sm:mt-[10rem] xl:mt-[15%] 2xl:mt-[18%]">
            <motion.div
              className="border-b-2 border-[#E87B37] w-[6rem] sm:w-[7rem] md:w-[10rem] lg:w-[12rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            ></motion.div>
            <div className="text-white">
              <motion.h1
                className="font-[serif-regular] text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl pt-[0.5rem]"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
              >
                An Innovative Agency For
              </motion.h1>
              <motion.h1
                className="font-[serif-regular] text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl pt-[0.5rem]"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
              >
                Forward-thinking Brands.
              </motion.h1>
              <motion.p
                className="font-[poppins-regular] pt-[0.5rem] text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] 2xl:text-[1.3rem] "
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              </motion.p>
              <motion.p
                className="font-[poppins-regular] text-[0.6rem] md:text-[1rem] 2xl:text-[1.3rem]"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
              >
                elit. Ut elit tellus, luctus nec ullamcorper mattis,
              </motion.p>
              <motion.p
                className="font-[poppins-regular] text-[0.6rem] md:text-[1rem] 2xl:text-[1.3rem]"
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
      </Element>
    </React.Fragment>
  );
};

export default Home;
