import React from "react";
import smallRectangle from "../../Assets/Images/smallRectangle.svg";
import aboutUsImage from "../../Assets/Images/aboutUsImage.svg";
const AboutUs = () => {
  return (
    <div className="flex justify-center">
      {/* First Row (1.5 times bigger) */}
      <div className="flex-1 pl-20 pt-10">
        <img src={smallRectangle} alt="logo" className="pt-7" />
        <h1 className="font-[serif-regular] pt-1 text-7xl font-bold text-black">
          About Us
        </h1>
        <p className="font-[poppins-regular] pt-3 text-black">
          We are a team of 40 web experts with over 12 years of experience in
          website building and marketing to help businesses grow online.
        </p>
        <h1 className="font-[serif-regular] text-2xl pt-6 font-bold text-black">
          Mission
        </h1>
        <p className="font-[poppins-regular] pt-3 text-black">
          We are a team of 40 web experts with over 12 years of experience in
          website building and marketing to help businesses grow online.
        </p>
        <h1 className="font-[serif-regular] text-2xl pt-6 font-bold text-black">
          Goals
        </h1>
        <p className="font-[poppins-regular] pt-3 text-black">
          We are a team of 40 web experts with over 12 years of experience in
          website building and marketing to help businesses grow online.
        </p>
      </div>

      {/* Second Row */}
      <div className="flex-1 p-4">
        <img src={aboutUsImage} />
      </div>
    </div>
  );
};

export default AboutUs;
