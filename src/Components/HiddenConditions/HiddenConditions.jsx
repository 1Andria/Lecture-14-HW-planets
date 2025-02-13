import React from "react";

function HiddenConditions({ cond, isActive, onClick, planetName }) {
  const HiddenplanetColors = {
    Mercury: "border-b-[#419EBB]",
    Venus: "border-b-[#EDA249]",
    Earth: "border-b-[#6D2ED5]",
    Mars: "border-b-[#D14C32]",
    Jupiter: "border-b-[#D83A34]",
    Saturn: "border-b-[#CD5120]",
    Uranus: "border-b-[#1EC2A4]",
    Neptune: "border-b-[#2D68F0]",
  };
  return (
    <>
      <div
        onClick={onClick}
        className={`hidden max-[600px]:flex cursor-pointer border border-b-[4px] justify-center items-center  w-[80px] ${
          isActive ? HiddenplanetColors[planetName] : "border-b-transparent"
        } `}
      >
        <h4
          className={`text-[10px] font-spartan text-center ${
            isActive ? "text-white" : "text-white/20"
          }`}
        >
          {cond}
        </h4>
      </div>
    </>
  );
}

export default HiddenConditions;
