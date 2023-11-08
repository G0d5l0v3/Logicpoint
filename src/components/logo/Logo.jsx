import React from 'react'
import logo from "../../assets/images/Logicpoint-Logo.svg";

const Logo = () => {
  return (
    <div>
       <img
          src={logo}
          alt="Company Logo"
          className="w-25 h-10 border-r-[0.15rem] border-[#dad7c4] pr-[0.5rem]"
        />
    </div>
  )
}

export default Logo