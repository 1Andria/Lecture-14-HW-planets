import React from "react";
import Arrow from "../../assets/arrow.png";
import Condition from "../Condition/Condition";

function Informational({ newData, active, setActive, getImage }) {
  return (
    <>
      <div className="flex w-[100%] justify-between gap-[30px] max-md:flex-col max-md:items-center ">
        <div className="max-w-[500px] w-full max-h-[430px] h-full  flex justify-center items-center relative max-md:max-w-[290px] max-md:h-[220px] max-[700px]:!max-w-[240px] max-[700px]:!h-[170px]">
          <img src={getImage()} alt={newData.name} className="w-auto h-auto" />
          <img
            src={newData.images.geology}
            className={`${
              active === 3 ? "block" : "hidden"
            } max-h-[179px] max-w-[143px] max-lg:w-[110px] max-lg:h-[139px] absolute top-[65%] max-[700px]:top-[40%]`}
          />
        </div>
        <div className=" flex flex-col max-w-[350px] w-full gap-[30px] max-md:flex-row max-md:items-center max-md:max-w-full max-md:justify-between max-[600px]:!justify-center">
          <div className="max-md:max-w-[329px] flex flex-col gap-[8px] ">
            <h1 className="font-antonio text-[70px] text-white not-italic font-normal max-md:text-[48px] max-[600px]:text-center">
              {newData.name.toUpperCase()}
            </h1>
            <p className="font-spartan text-white text-[14px] max-md:text-[11px] max-[600px]:text-center  ">
              {newData.overview.content}
            </p>
            <div className="flex gap-[8px] items-center !mb-[10px] max-[600px]:justify-center">
              <p className="font-spartan text-white text-[14px] opacity-[0.5] leading-[25px]  ">
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
          </div>
          <div className="flex flex-col gap-[16px] max-[600px]:hidden">
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
