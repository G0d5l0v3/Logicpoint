import React, { useEffect } from "react";
import { Element } from "react-scroll";
import smallRectangle from "../../Assets/Images/smallRectangle.svg";
import sanefLogo from "../../Assets/Images/sanef-logo.png";
import zedvanceLogo from "../../Assets/Images/zedvance-logo.png";
import parallexLogo from "../../Assets/Images/parallex-logo.png";
import globusLogo from "../../Assets/Images/globus-logo.png";
import meristemLogo from "../../Assets/Images/meristem-logo.png";
import palLogo from "../../Assets/Images/pal-logo.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const partners = [sanefLogo, zedvanceLogo, parallexLogo, globusLogo, meristemLogo, palLogo];

  const animationDown = useAnimation();
  const animationLeft = useAnimation();
  const animationRight = useAnimation();
  const animationUp = useAnimation();
  const animationReveal = useAnimation();

  useEffect(() => {
    if (inView) {
      animationDown.start({
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 1, delay: 1 },
      });
    }
    if (!inView) {
      animationDown.start({
        opacity: 0,
        y: -50,
        transition: { ease: "easeInOut", duration: 1, delay: 1 },
      });
    }
  }, [inView, animationDown]);

  useEffect(() => {
    if (inView) {
      animationUp.start({
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
    if (!inView) {
      animationUp.start({
        opacity: 0,
        y: 50,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
  }, [inView, animationUp]);

  useEffect(() => {
    if (inView) {
      animationLeft.start({
        opacity: 1,
        x: 0,
        exit: { x: 0 },
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
    if (!inView) {
      animationLeft.start({
        opacity: 0,
        x: 50,
        exit: { x: 50 },
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
  }, [inView, animationLeft]);

  useEffect(() => {
    if (inView) {
      animationReveal.start({
        opacity: 1,
        transition: { ease: "easeInOut", duration: 1, delay: 0.8 },
      });
    }
    if (!inView) {
      animationReveal.start({
        opacity: 0,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
  }, [inView, animationReveal]);

  useEffect(() => {
    if (inView) {
      animationRight.start({
        opacity: 1,
        x: 0,
        exit: { x: 0 },
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
    if (!inView) {
      animationRight.start({
        opacity: 0,
        x: -50,
        exit: { x: -50 },
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
  }, [inView, animationRight]);

  return (
    <React.Fragment>
      <div className="w-full min-h-screen bg-[#F5F5F5] ">
        <Element name="services">
          <div
            ref={ref}
            className="flex flex-col md:flex md:flex-row justify-center 2xl:items-center 2xl:h-[50svh] px-[10%]"
          >
            <motion.div className="flex-1 pt-[5rem]" animate={animationUp}>
              <motion.div animate={animationUp}>
                <div>
                  <img src={smallRectangle} alt="bar" className="pt-7" />
                </div>
                <div>
                  <h1 className="font-[serif-regular] pt-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-9xl font-bold text-black">
                    Hire Us For
                  </h1>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex sm:flex-row sm:justify-between md:flex md:flex-row pt-[2rem]">
                <motion.div animate={animationReveal} className=" ">
                  <h1 className="font-[serif-regular] text-sm sm:text-lg md:text-xl lg:text-2xl 2xl:text-5xl pt-6 font-bold text-black">
                    IT Consulting
                  </h1>
                  <p className="font-[poppins-regular] pt-3 text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    Our web design team has ample
                  </p>
                  <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    years of experience in the core areas of
                  </p>
                  <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    custom design and marketing solutions.
                  </p>
                </motion.div>

                <motion.div animate={animationReveal} className="">
                  <h1 className="font-[serif-regular] text-sm sm:text-lg md:text-xl lg:text-2xl  2xl:text-5xl pt-6 font-bold text-black">
                    Development
                  </h1>
                  <p className="font-[poppins-regular] pt-3 text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    Our web design team has ample
                  </p>
                  <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    years of experience in the core areas of
                  </p>
                  <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    custom design and marketing solutions.
                  </p>
                </motion.div>

                <motion.div animate={animationReveal}>
                  <h1 className="font-[serif-regular] text-sm sm:text-lg md:text-xl lg:text-2xl 2xl:text-5xl pt-6 font-bold text-black">
                    Installation
                  </h1>
                  <p className="font-[poppins-regular] pt-3 text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    Our web design team has ample
                  </p>
                  <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    years of experience in the core areas of
                  </p>
                  <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    custom design and marketing solutions.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Element>

        <Element name="partners">
          <div
            ref={ref}
            className="flex flex-col md:flex md:flex-col justify-center 2xl:items-center 2xl:h-[50svh] px-[10%]"
          >
            <motion.div className="mt-[7%] 2xl:mt-[0]" animate={animationRight}>
              <h1 className="font-[serif-regular] text-center pt-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-9xl font-bold text-black">
                Clients We Work With
              </h1>
            </motion.div>
            <motion.div className="mt-[7%] 2xl:mt-[7%]" animate={animationDown}>
              <div className="flex flex-wrap justify-center gap-10 items-center">
                {partners.map((partner, index) => (
                  <div key={index}>
                    <img
                      src={partner}
                      alt="partnersLogo"
                      className=" w-20 sm:w-40 sm:h-30"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Element>
      </div>
    </React.Fragment>
  );
};

export default Services;
