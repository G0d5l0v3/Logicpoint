import React from "react";
import { useEffect } from "react";
import smallRectangle from "../../Assets/Images/smallRectangle.svg";
import aboutUsImage from "../../Assets/Images/aboutUsImage.svg";
import { motion, useAnimation } from "framer-motion";

const AboutUs = () => {
  const controls = useAnimation();
  const animation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    // Function to trigger animation when the element is in view
    const handleScroll = () => {
      const element = document.querySelector("element-id");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <React.Fragment>
      <div className="flex flex-col md:flex md:flex-row justify-center pl-[10%] min-h-screen w-full">
        {/* First Row (1.5 times bigger) */}
        <div className="flex-1  pt-10">
          <div>
            <img src={smallRectangle} alt="logo" className="pt-7" />
          </div>
          <div>
            <h1 className="font-[serif-regular] pt-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              About Us
            </h1>
            <p className="font-[poppins-regular] pt-3 text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
              We are a team of 40 web experts with over 12 years of
            </p>
            <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
              experience in website building and marketing to help
            </p>
            <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
              businesses grow online.
            </p>
          </div>
          

          <h1 className="font-[serif-regular] text-sm sm:text-lg md:text-xl lg:text-2xl pt-6 font-bold text-black">
            Mission
          </h1>
          <p className="font-[poppins-regular] pt-3 text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
            Our mission is to empower our clients to use the internet
          </p>
          <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
            to its full potential by providing affordable, effective,
          </p>
          <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
            custom design and marketing solutions.
          </p>

          <h1 className="font-[serif-regular] text-sm sm:text-lg md:text-xl lg:text-2xl  pt-6 font-bold text-black">
            Goals
          </h1>
          <p className="font-[poppins-regular] pt-3 text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
            Our vision is to become a global leader in providing the
          </p>
          <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
            best and unique web design and marketing services to
          </p>
          <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
            improve our client’s productivity and business strength.
          </p>
        </div>
        {/* Second Row */}
        <div className="hidden md:flex md:justify-end md:items-center ">
          <img src={aboutUsImage} className="w-[70%]" />
        </div>
        <div className="flex items-center justify-center md:hidden ">
          <img src={aboutUsImage} className="w-[auto]" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
