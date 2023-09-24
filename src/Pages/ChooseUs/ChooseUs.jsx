import React, { useEffect } from "react";
import { Element } from "react-scroll";
import smallRectangle from "../../Assets/Images/smallRectangle.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ChooseUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animationUp = useAnimation();
  const animationReveal = useAnimation();
  return (
    <React.Fragment>
      <div className="w-full min-h-screen">
        <Element name="services">
          <div
            ref={ref}
            className="flex flex-col md:flex md:flex-row justify-center h-[50svh] 2xl:items-start 2xl:h-[50svh] px-[10%] "
          >
            <motion.div className="flex-1 " animate={animationUp}>
              <motion.div animate={animationUp}>
                <div>
                  <img src={smallRectangle} alt="bar" className="pt-7" />
                </div>
                <div>
                  <h1 className="font-[serif-regular] pt-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-9xl font-bold text-black">
                    Why Choose Us?
                  </h1>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex sm:flex-row sm:justify-between md:flex md:flex-row pt-[2rem]">
                <motion.div animate={animationReveal} className=" ">
                  <p className="font-[poppins-regular] pt-3 text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    We are the right term for your business. We have the
                    expertise and knowledge to offer impartial advice
                  </p>
                  <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    and services at an honest price.
                  </p>
                  <p className="font-[poppins-regular] pt-3 text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    With us you’ll feel heard. We listen to our client
                    requirements and then select the right solution that fits.
                  </p>
                  <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    We care for your business as our own. We take a sincere
                    interest in it and genuinely want to help your company reach
                  </p>
                  <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] 2xl:text-[1.4rem] text-black">
                    its potential.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Element>
        <Element name="services">
          <div
            ref={ref}
            className="flex flex-col md:flex md:flex-row justify-center 2xl:items-center 2xl:h-[50svh] px-[10%]"
          >
            <motion.div className="flex-1 pt-[5rem]" animate={animationUp}>
              <div className="flex flex-col sm:flex sm:flex-row sm:justify-between md:flex md:flex-row pt-[2rem]">
                <motion.div animate={animationReveal} className=" ">
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
      </div>
    </React.Fragment>
  );
};

export default ChooseUs;
