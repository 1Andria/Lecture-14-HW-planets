import React from "react";

function AboutDiv({ about, number }) {
  return (
    <>
      <div className=" border border-white/20 w-[285px] h-[128px] pt-[20px] pl-[23px] pb-[27px]">
        <p className="font-spartan text-[11px] opacity-[0.5] text-white">
          {about}
        </p>
        <h1 className="text-white font-antonio text-[40px] tracking-[-1.5px] font-normal">
          {number}
        </h1>
      </div>
    </>
  );
}
export default AboutDiv;
