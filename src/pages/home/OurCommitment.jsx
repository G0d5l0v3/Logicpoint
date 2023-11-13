import React from "react";
import Button from "../../components/button/Button";

const OurCommitment = () => {
  return (
    <div className="bg-[#181830]">
      <div
        className="font-[exo] min-h-[80svh] flex flex-col justify-around max-w-[1440px] mx-auto px-[2rem] sm:px-[5rem]"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div>
          <h1 className="text-white py-[2rem] font-semibold text-4xl sm:text-5xl lg:text-6xl py-[0.3rem] text-[#181830]">
            <span className="border-b-8 border-[#5D1570] ">Our </span>
            <span>Commitment </span>
            <span className="text-[#E87B37]">to You</span>{" "}
          </h1>
        </div>
        <div className="text-white font-[Exo]">
          <div className="flex-col pt-[2rem] md:flex gap-3">
            <div>
              <h1 className="font-bold text-[#E87B37]">Exponential Growth</h1>
              <div className="pt-[1rem]">
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-7 md:h-10 w-10 bg-[#E87B37]">
                    1
                  </span>{" "}
                  Committed 24/7 to generating sales and new customers for your
                  business.
                </div>
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-7 md:h-10 w-10 bg-[#E87B37]">
                    2{" "}
                  </span>{" "}
                  Proficient, highly skilled agents providing world-class
                  customer services.
                </div>
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-7 md:h-10 w-10 bg-[#E87B37]">
                    3{" "}
                  </span>{" "}
                  <p>
                    Multi-process outsourced solutions that enable your business
                    to scale.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="font-bold text-[#E87B37]">Cost Efficiency</h1>
              <div className="pt-[1rem]">
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-7 md:h-10 w-10 bg-[#E87B37]">
                    1{" "}
                  </span>{" "}
                  <p>Cost reductions of up to 70% for frontline and back office services.</p>
                </div>
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-7 md:h-10 w-10 bg-[#E87B37]">
                    2{" "}
                  </span>{" "}
                  <p>
                    Multi-talented teams of customer service and support from
                    seasoned experts.
                  </p>
                </div>
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-7 md:h-10 w-10 bg-[#E87B37]">
                    3{" "}
                  </span>{" "}
                  <p>
                    Multi-process outsourced solutions that enable your business
                    to scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[3rem] px">
            <Button description="Talk to Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
