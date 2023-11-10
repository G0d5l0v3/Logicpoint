import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "./Link";
import NavItems from "../../components/navbar/NavItems";
import Hamburger from "hamburger-react";
import Logo from "../logo/Logo";
import Button from "../button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-[#f9f6da] flex justify-between items-center font-[exo] max-w-[1440px] mx-[auto] px-[2rem] sm:px-[5rem] pt-[1rem] pb-[1rem]">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        >
          <Logo />
          <Link links={NavItems} className="hidden lg:flex" />
        </motion.div>
        <motion.div
          className="flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
        >
          <div className="hidden lg:flex">
            <Button description="Contact Us" color="black" />
          </div>
          <div className="lg:hidden">
            <Hamburger
              rounded
              toggled={isOpen}
              toggle={setIsOpen}
              size={20}
              easing="ease-in"
            />
          </div>
        </motion.div>
      </nav>

      {/* CONDITIONAL RENDERING FOR MOBILE VIEW */}
      {isOpen && (
        <div className="bg-[#f9f6da] flex items-center justify-center flex-col font-[exo] lg:hidden">
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
