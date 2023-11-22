import React from "react";
import FastMarquee from "react-fast-marquee";

const Clients = ({ images }) => {
  const duplicatedImage = [...images, ...images];

  return (
    <div className="">
      <div className="flex justify-center items-center pt-[3rem]">
        <h1 className="font-[exo] font-semibold text-4xl sm:text-5xl lg:text-6xl py-[0.3rem] text-[#181830]">
          <span className="text-[#E87B37] border-b-8 border-[#5D1570] ">
            Our
          </span>{" "}
          Clients
        </h1>
      </div>

      <div className="flex items-center justify-center h-[60svh]">
        <FastMarquee speed={60} gradient>
          {duplicatedImage.map((image) => (
            <div key={image.id}>
              <img
                src={image.src}
                alt="companyImg"
                className="pr-[5rem] ml-[-20px]"
              />
            </div>
          ))}
        </FastMarquee>
      </div>
    </div>
  );
};

export default Clients;
