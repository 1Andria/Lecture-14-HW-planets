import React from "react";
import HiddenConditions from "../../Components/HiddenConditions/HiddenConditions";

function HiddenDiv({ newData, active, setActive }) {
  return (
    <>
      <div className="hidden h-[50px] w-[100%] border border-b-white/20 max-[600px]:flex justify-between pl-[24px] pr-[24px]">
        <HiddenConditions
          cond="OVERVIEW"
          isActive={active === 1}
          onClick={() => setActive(1)}
          planetName={newData.name}
        />
        <HiddenConditions
          cond="STRUCTURE"
          isActive={active === 2}
          onClick={() => setActive(2)}
          planetName={newData.name}
        />
        <HiddenConditions
          cond="SURFACE"
          isActive={active === 3}
          onClick={() => setActive(3)}
          planetName={newData.name}
        />
      </div>
    </>
  );
}

export default HiddenDiv;
