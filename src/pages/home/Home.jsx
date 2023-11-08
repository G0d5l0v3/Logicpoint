import React from "react";
import Navbar from "../../components/navbar/Navbar";
//import image1 from "../../assets/images/image1.jpg";
//import image2 from "../../assets/images/image2.jpg";
//import image3 from "../../assets/images/image3.jpg";
//import image4 from "../../assets/images/image4.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-[80svh] justify-between items-center max-w-[1440px] mx-auto px-[5rem] ">
        <div className="flex flex-col h-[40svh]text-[#181830]">
          <h1 className="font-[exo] font-semibold text-3xl sm:text-5xl lg:text-6xl py-[0.3rem]">
            Empowering Brands
          </h1>
          <h1 className="font-[exo] font-semibold text-3xl sm:text-5xl lg:text-6xl py-[0.3rem]">
            With <span className="text-[#E87B37] ">Seamless</span>
          </h1>
          <h1 className="font-[exo] font-semibold text-3xl sm:text-5xl lg:text-6xl py-[0.3rem]">IT Solutions</h1>
          <p className="font-[poppins] text-sm sm:text-md lg:text-lg pt-[2rem] pb-[0.3rem}">We deploy the best-in-class technology to meet the unique  </p>
          <p className="font-[poppins] text-sm sm:text-md lg:text-lg pb-[0.15rem]">needs of each of our clients. Our solutions are at the</p>
          <p className="font-[poppins] text-sm sm:text-md lg:text-lg">cutting edge of contact centre business.</p>
        </div>
        <div className="grid">
          <div className="grid"></div>
          <div className="grid"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
