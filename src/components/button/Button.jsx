import React from "react";

const Button = ({ description, color }) => {
  return (
    <button
      className={
        color === "black"
          ? "text-white text-[0.8rem] bg-[black] font-semibold px-4 py-2 "
          : "border-black border-2 text-[0.8rem] font-semibold px-4 py-2 "
      }
    >
      {description}
    </button>
  );
};

export default Button;
