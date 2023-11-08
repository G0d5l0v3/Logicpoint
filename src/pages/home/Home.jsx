import React from "react";
import Navbar from "../../components/navbar/Navbar";
import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"
import image4 from "../../assets/images/image4.jpg"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between h-[80svh] items-center max-w-[1440px] mx-auto px-[5rem] ">
        <div className="text-[#181830]">
          <h1 className="font-[exo] font-semibold text-6xl">
            Empowering Brands
          </h1>
          <h1 className="font-[exo] font-semibold text-6xl">
            With <span className="text-[#E87B37] ">Seamless</span>
          </h1>
          <h1 className="font-[exo] font-semibold text-6xl">Tech Solutions</h1>
        </div>
        <div className="grid">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
