import React from "react";
import MobArrow from "../../assets/mobArrow.png";

function BurgerMenu({ planetName, onClick }) {
  const planetColors = {
    MERCURY: "bg-[#419EBB]",
    VENUS: "bg-[#EDA249]",
    EARTH: "bg-[#6D2ED5]",
    MARS: "bg-[#D14C32]",
    JUPITER: "bg-[#D83A34]",
    SATURN: "bg-[#CD5120]",
    URANUS: "bg-[#1EC2A4]",
    NEPTUNE: "bg-[#2D68F0]",
  };

  return (
    <>
      <div
        onClick={onClick}
        className="flex pb-[23px] pt-[23px] border-b border-b-white/20 justify-between items-center cursor-pointer "
      >
        <div className="flex gap-[25px]">
          <div
            className={`w-[20px] h-[20px] ${planetColors[planetName]} rounded-[50px]`}
          ></div>
          <h1 className="text-white font-spartan text-[15px] ">{planetName}</h1>
        </div>
        <img className="w-[8px] h-[16px]" src={MobArrow} alt="arrow" />
      </div>
    </>
  );
}

export default BurgerMenu;
