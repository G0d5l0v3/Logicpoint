import React from "react";
import FastMarquee from "react-fast-marquee";

const Clients = ({images}) => {
  const duplicatedImage = [...images,...images]

  return (
    <div className="">
      
      <div className="flex items-center justify-center h-[60svh]">
        <FastMarquee speed={60} gradient>
          {duplicatedImage.map((image) => (
            <div key={image.id}>
              <img
                src={image.src}
                alt="companyImg"
                className="pr-[10rem] ml-[-20px]"
              />
            </div>
          ))}
        </FastMarquee>
      </div>
    </div>
  );
};

export default Clients;
