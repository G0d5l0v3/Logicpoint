import React from "react";
import { useEffect } from "react";
import smallRectangle from "../../Assets/Images/smallRectangle.svg";
import aboutUsImage from "../../Assets/Images/aboutUsImage.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 }
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: -50,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
  }, [inView, animation]);

  return (
    <React.Fragment>
      <Element name="about">
        <div
          ref={ref}
          className="flex flex-col md:flex md:flex-row justify-center pl-[10%] pb-[10rem] sm:min-h-screen h-[auto] w-full"
        >
          {/* First Row (1.5 times bigger) */}
          <motion.div className="flex-1 pt-[5rem]" animate={animation}>
            <div>
              <img src={smallRectangle} alt="bar" className="pt-7" />
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
          </motion.div>
          {/* Second Row */}
          <div className="hidden lg:flex lg:justify-end lg:items-center ">
            <img src={aboutUsImage} alt="aboutUs" className="w-[70%]" />
          </div>

        </div>
      </Element>
    </React.Fragment>
  );
};

export default AboutUs;
