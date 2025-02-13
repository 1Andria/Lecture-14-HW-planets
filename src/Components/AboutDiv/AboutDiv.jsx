import React from "react";

function AboutDiv({ about, number }) {
  return (
    <>
      <div className=" border border-white/20 w-[285px] h-[128px] pt-[20px] pl-[23px] pb-[27px] max-xl:w-[164px] max-xl:h-[88px] max-md:w-[100%] max-md:h-[48px] max-md:flex max-md:items-center max-md:justify-between max-md:pr-[23px] ">
        <p className="font-spartan text-[11px] opacity-[0.5] text-white max-xl:text-[8px] max-xl:leading-[16px] ">
          {about}
        </p>
        <h1 className="text-white font-antonio text-[40px] tracking-[-1.5px] font-normal max-xl:text-[22px] max-md:text-[20px] ">
          {number}
        </h1>
      </div>
    </>
  );
}
export default AboutDiv;
