import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import Link from "./Link";
import NavItems from "../../components/navbar/NavItems";
import Hamburger from "hamburger-react";
import Logo from "../logo/Logo";
import Button from "../button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={
        scrollPosition !== 0
          ? "sticky bg-white top-0 z-10 shadow"
          : "sticky bg-white top-0 z-10"
      }
    >
      <nav
        className="flex justify-between items-center font-[exo] max-w-[1440px] mx-[auto] px-[2rem] sm:px-[5rem] pt-[1rem] pb-[1rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
      >
        <motion.div className="flex items-center">
          <Logo />
          <Link links={NavItems} className="hidden lg:flex text-[0.8rem]" />
        </motion.div>
        <motion.div className="flex">
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
        <div className="bg-[#ece7eb] flex items-center h-screen justify-center flex-col font-[exo] lg:hidden">
          <div className="grid gap-3">
            <Link
              links={NavItems}
              className="flex basis-full flex-wrap items-center justify-center flex-col text-[4rem]"
            />
            <Button description="Contact Us" color="black" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
