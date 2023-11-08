import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({links, className}) => {
  return (
    <div className={className}>
      {links.map((link) => (
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
  );
};

export default Link;
