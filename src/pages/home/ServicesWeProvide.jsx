import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesWeProvide = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div>ServicesWeProvide</div>;
};

export default ServicesWeProvide;
