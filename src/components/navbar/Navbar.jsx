import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../button/Button";
import logo from "../../assets/images/Logicpoint-Logo.svg";

const Navbar = ({ navLinks }) => {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    return selectedId === id ? setSelectedId(null) : setSelectedId(id);
  }
  return (
    <nav className="flex justify-between items-center font-[exo] max-w-[1440px] mx-[auto] px-[5rem] pt-[1rem]">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Company Logo"
          className="w-25 h-10 border-r-[0.1rem] border-[#5D1570] pr-[0.5rem]"
        />
        {navLinks.map((item) => (
          <Link
            className={`mx-[2rem] cursor-pointer text-[0.7rem] font-semibold ${
              selectedId === item.id ? "text-[#E87B37]" : "text-black"
            }`}
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <Button description={"Contact Us"} color={"black"} />
    </nav>
  );
};

export default Navbar;
