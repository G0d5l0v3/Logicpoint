import React from "react";

const OurServicesBox = ({services}) => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 font-[exo]">
      {services.map((service) => (
        <div className="grid bg-[#181830] text-white shadow-lg rounded-lg h-[20rem] 2xl:h-[30rem] px-[2rem] pt-[2rem]">
          <span className="flex items-center justify-center rounded-full h-10 w-10 bg-[#5D1570]">{service.id}</span>
          <h1 className="font-bold">{service.title}</h1>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OurServicesBox;