import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//import { motion } from "framer-motion"
import Navbar from "./Navbar";

import { Link } from "react-scroll";

import "../../index.css";

const Home = () => {
 // const [isAnimating, setIsAnimating] = useState(false);
 // const [clicked, setClicked] = useState(false);

//  const handleClick = () => {
 //   setClicked(!clicked);
 //   setIsAnimating(!isAnimating);
 // }; 

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <React.Fragment>
      <div className="h-screen bg font-[poppins-regular] w-full text-white max-w-[1400px] px-[10%]">
        <Navbar />
        <section className="flex items-center h-screen">
          <div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold"
              data-aos="fade-right"
            >
              Impact is what sets us
            </h1>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold"
              data-aos="fade-right"
            >
              apart from the crowd.
            </h1>
            <p
              className="mt-5 text-sm md:text-[1rem] lg:text-lg"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              We empower our clients to use the internet{" "}
            </p>
            <p
              className="text-sm md:text-[1rem] lg:text-lg"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              to its full potential by providing affordable,
            </p>
            <p
              className="text-sm md:text-[1rem] lg:text-lg"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {" "}
              effective, custom design and marketing solutions.
            </p>
            <Link>
              <div
                className="text-sm md:text-[1rem] lg:text-lg hover:bg-[#E87B37] hover:text-white hover:border-[#E87B37] cursor-pointer border-[#E87B37] border-2 rounded-md w-[10rem] text-center p-[1rem] mt-9"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-offset="-500"
              >
                Learn More
              </div>
            </Link>
          </div>
        </section>
        <div className="custom-shape-divider-bottom-1695235927 mt-5">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
