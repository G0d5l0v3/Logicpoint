import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({links, className}) => {
  return (
    <div className={className}>
      {links.map((link) => (
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "mx-[2rem] text-[0.85rem] text-[#5D1570] font-semibold"
              : "mx-[2rem] text-[0.8rem] text-[#181830] font-semibold hover:opacity-[0.7]";
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
