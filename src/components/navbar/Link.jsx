import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ links, className }) => {
  return (
    <div className={className}>
      {links.map((link) => (
        <div className="flex flex-col items-center" key={link.id}>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "mx-[2rem] text-[#5D1570] font-semibold"
                : "mx-[2rem] text-[#181830] font-semibold hover:opacity-[0.7]";
            }}
            to={link.to}
            key={link.id}
          >
            {link.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Link;
