import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import Button from "../button/Button";
import logo from "../../assets/images/Logicpoint-Logo.svg";

const Navbar = ({ navLinks }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center font-[exo] max-w-[1440px] mx-[auto] px-[5rem] pt-[1rem]">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Company Logo"
          className="w-25 h-10 border-r-[0.15rem] border-[#dad7c4] pr-[0.5rem]"
        />
        {navLinks.map((link) => (
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "mx-[2rem] text-[0.8rem] text-[#E87B37] font-semibold"
                : "mx-[2rem] text-[0.8rem] font-semibold hover:opacity-[0.7]";
            }}
            to={link.to}
            key={link.id}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <Button description="Contact Us" color="black" />
      <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
    </nav>
  );
};

export default Navbar;
