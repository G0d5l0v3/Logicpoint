import React from "react";

const Button = ({ description, color }) => {
  return (
    <button
      className={
        color === "black"
          ? "text-white bg-[black] font-semibold px-4 py-2"
          : "border-black border-2 font-semibold px-4 py-2"
      }
    >
      {description}
    </button>
  );
};

export default Button;
