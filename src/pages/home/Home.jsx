import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen max-w-[1440px] mx-auto px-[5rem] py-[5rem]">
        <div className="py-[3rem] text-[#181830]">
          <h1 className="font-[exo] font-semibold text-6xl">
            Empowering Brands
          </h1>
          <h1 className="font-[exo] font-semibold text-6xl">
            With <span className="text-[#E87B37] ">Seamless</span>
          </h1>
          <h1 className="font-[exo] font-semibold text-6xl">Tech Solutions</h1>
        </div>
        <div className="grid"></div>
      </div>
    </div>
  );
};

export default Home;
