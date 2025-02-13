import React from "react";

function Condition({ number, cond, isActive, onClick, planetName }) {
  const planetColors = {
    Mercury: "bg-[#419EBB]",
    Venus: "bg-[#EDA249]",
    Earth: "bg-[#6D2ED5]",
    Mars: "bg-[#D14C32]",
    Jupiter: "bg-[#D83A34]",
    Saturn: "bg-[#CD5120]",
    Uranus: "bg-[#1EC2A4]",
    Neptune: "bg-[#2D68F0]",
  };
  return (
    <>
      <div
        onClick={onClick}
        className={` hover:bg-[#D8D8D8]/20  cursor-pointer ${
          isActive ? planetColors[planetName] : "bg-transparent"
        } w-[350px] h-[48px] border border-white/20 pl-[28px] pt-[12px] flex gap-[28px]
        max-md:w-[281px] max-md:h-[40px]
        `}
      >
        <p className=" font-spartan text-[12px] opacity-[0.5] text-white max-md:text-[9px]">
          {number}
        </p>
        <h3 className=" text-white font-spartan text-[12px] max-md:text-[9px]">
          {cond}
        </h3>
      </div>
    </>
  );
}

export default Condition;
