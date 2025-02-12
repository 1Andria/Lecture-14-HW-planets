import React, { useState } from "react";
import Arrow from "../../assets/arrow.png";
import Condition from "../Condition/Condition";
import Ragac from "../../../public/geology-venus.png";

function Informational({ newData }) {
  const [active, setActive] = useState(1);
  function getImage() {
    if (active === 1) return newData.images.planet;
    if (active === 2) return newData.images.internal;
    if (active === 3) return newData.images.planet;
  }
  return (
    <>
      <div className="flex w-[100%] justify-between">
        <div className="max-w-[500px] w-full max-h-[430px] h-full  flex justify-center items-center relative">
          <img src={getImage()} alt={newData.name} className="w-auto h-auto" />
          <img
            src={newData.images.geology}
            className={`${
              active === 3 ? "block" : "hidden"
            } h-[179px] w-[143px] absolute top-[65%]`}
          />
        </div>
        <div className=" flex flex-col max-w-[350px] w-full gap-[10px]">
          <h1 className="font-antonio text-[80px] text-white not-italic font-normal">
            {newData.name.toUpperCase()}
          </h1>
          <p className="font-spartan text-white text-[14px] ">
            {newData.overview.content}
          </p>
          <div className="flex gap-[8px] items-center">
            <p className="font-spartan text-white text-[14px] opacity-[0.5] leading-[25px]">
              Source:{" "}
              <a
                href={newData.overview.source}
                target="_blank"
                className=" text-[16px] underline"
              >
                Wikipedia
              </a>
            </p>
            <img src={Arrow} alt="Arrow" className="w-[12px] h-[12px]" />
          </div>
          <div className="flex flex-col gap-[16px]">
            <Condition
              number="01"
              cond="OVERVIEW"
              isActive={active === 1}
              onClick={() => setActive(1)}
              planetName={newData.name}
            />
            <Condition
              number="02"
              cond="Internal Structure"
              isActive={active === 2}
              onClick={() => setActive(2)}
              planetName={newData.name}
            />
            <Condition
              number="03"
              cond="Surface Geology"
              isActive={active === 3}
              onClick={() => setActive(3)}
              planetName={newData.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Informational;
