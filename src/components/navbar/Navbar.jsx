import React, { useState } from "react";
import Link from "./Link";
import NavItems from "../../components/navbar/NavItems";
import Hamburger from "hamburger-react";
import Logo from "../logo/Logo";
import Button from "../button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center font-[exo] max-w-[1440px] mx-[auto] px-[5rem] pt-[1rem]">
        <div className="flex items-center">
          <Logo />
          <Link links={NavItems} className="hidden lg:flex" />
        </div>
        <div className="flex">
          <div className="hidden lg:flex">
            <Button description="Contact Us" color="black" />
          </div>
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
          </div>
        </div>
      </nav>

      {/* CONDITIONAL RENDERING FOR MOBILE VIEW */}
      {isOpen && (
        <div className="flex items-center justify-center flex-col font-[exo] lg:hidden">
          <Link
            links={NavItems}
            className="flex basis-full flex-wrap items-center justify-center flex-col"
          />
          <Button description="Contact Us" color="black" />
        </div>
      )}
    </header>
  );
};

export default Navbar;
